import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'ntx-stroked-button',
  templateUrl: './stroked-button.component.html',
  styleUrls: ['./stroked-button.component.scss']
})
export class StrokedButtonComponent implements OnInit {

  @Input() color: string;
  @Input() disabled: string;

  constructor() { }

  ngOnInit() {
  }

}
