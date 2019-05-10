import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MatSnackBar } from '@angular/material';
import { Subject } from 'rxjs';
import { Movie } from '../model/movie.model';

@Injectable({
  providedIn: 'root'
})
export class CatalogueService {
  loading = new Subject<void>();
  constructor(private http: HttpClient, private snackBar: MatSnackBar) {

  }

  getMovies() {

  }

  addMovies(movie: Movie) {
    this.loading.next();
    const varurl = 'https://localhost:44310/api/Movies';
    const httpHeader = new HttpHeaders({
      'cache-control': 'no-cache',
      'content-type': 'application/json',
    });
    const options = {
      headers: httpHeader
    };
    const body = movie;
    this.http.post(varurl, body, options).subscribe(()=>{
      this.loading.next();
      console.log("success");
    },err => {
      this.loading.next();
      console.log("error");
    });
  }

  deleteMovies() {

  }

  updateMovies() {

  }

  getActors() {

  }

  addActors() {

  }

  deleteActors() {

  }
  updateActors() {

  }

  getProducers() {

  }

  addProducers() {

  }

  deleteProducers() {

  }
  updateProducers() {

  }

}
