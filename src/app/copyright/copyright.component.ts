import { Component, Output, Input, EventEmitter } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-copyright',
  templateUrl: './copyright.component.html',
  styleUrl: './copyright.component.less'
})

export class CopyrightComponent {

constructor() {}
  
  // Properties
  year: number = Date.now();

}
