import {
  Component,
  ViewChild,
  Input
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { filmography } from '../data/filmography-data';
import films from '../films.json';
import { Films } from '../interfaces/filmography';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrl: './films.component.less'
})

export class FilmsComponent {

  constructor() {
  }
  
  // Properties
    
  public filmography: Films[] = films;

  public id: number;

  // Methods
    
  openLinkInNewTab(url: string) {
    let fullUrl;
    if (url.includes("http")) {
      fullUrl = url;
    } else {
      fullUrl = "http://palebluedotfilms.xyz/films/" + url;
    }
    window.open(fullUrl, "_blank");
  }

}
