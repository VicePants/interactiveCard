import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PROPERTIES } from '../textList';



@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {

  text = PROPERTIES;


@Output() showPropertyEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  showProperty(property: string) {
    this.showPropertyEvent.emit(property);
  }

}
