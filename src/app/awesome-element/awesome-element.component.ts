import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-awesome-element',
  templateUrl: './awesome-element.component.html',
  styleUrls: ['./awesome-element.component.css'],
})
export class AwesomeElementComponent implements OnInit {
  @Input() myInput = '';
  @Output() myOutput = new EventEmitter<string>();
  constructor() {}

  ngOnInit() {}
}
