import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './pages/home/home.component';
import { ToolbarComponent } from './commons/toolbar/toolbar.component';
import { SidenavComponent } from './commons/sidenav/sidenav.component';
import { AddMovieComponent } from './pages/add-movie/add-movie.component';
import { AddPersonComponent } from './pages/add-person/add-person.component';
import { ShowDetailsComponent } from './pages/show-details/show-details.component';
import { MaterialModule } from './material/material.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import { InfoComponent } from './pages/info/info.component';
import { ErrorComponent } from './pages/error/error.component';
import { MovieElementComponent } from './commons/movie-element/movie-element.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ToolbarComponent,
    SidenavComponent,
    AddMovieComponent,
    AddPersonComponent,
    ShowDetailsComponent,
    InfoComponent,
    ErrorComponent,
    MovieElementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
