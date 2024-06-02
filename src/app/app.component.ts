import { Component, ViewChild, ViewChildren, QueryList, ElementRef } from '@angular/core';
import { CopyrightComponent } from './copyright/copyright.component';
import { FilmsComponent } from './films/films.component';
import films from './films.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})

export class AppComponent {

  constructor() {}
  
  filmList = films;
}