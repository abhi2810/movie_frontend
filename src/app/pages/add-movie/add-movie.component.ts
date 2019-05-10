import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { AddPersonComponent } from '../add-person/add-person.component';
import { CatalogueService } from 'src/app/service/catalogue.service';
import { Subscription } from 'rxjs';
import { Movie } from 'src/app/model/movie.model';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit,OnDestroy {
  isLoading: boolean;
  movie: Movie;
  loadingsubscription = new Subscription();
  constructor(private dialog: MatDialog, private service: CatalogueService) {
    this.isLoading = false;
  }

  ngOnInit() {
    this.loadingsubscription = this.service.loading.subscribe(()=>{
      this.isLoading=!this.isLoading;
    });
  }

  ngOnDestroy() {
    this.loadingsubscription.unsubscribe();
  }

  onSignup(form: NgForm) {
    if(!form.invalid){
      this.movie = form.value;
      this.service.addMovies(this.movie);
      console.log(form.value);
    }
  }

  startDialog(type: string){
    const dialogRef = this.dialog.open(AddPersonComponent, {
      width: '350px',
      data: {type: type}
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log("closed");
    });
  }
  onCancel(){
    
  }

}
