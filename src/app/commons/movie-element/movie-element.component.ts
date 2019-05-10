import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-element',
  templateUrl: './movie-element.component.html',
  styleUrls: ['./movie-element.component.css']
})
export class MovieElementComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  editMovie(id: number){
    console.log(id);
  }

}
