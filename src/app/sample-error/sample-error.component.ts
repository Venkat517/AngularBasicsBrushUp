import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sample-error',
  templateUrl: './sample-error.component.html',
  styleUrls: ['./sample-error.component.css']
})
export class SampleErrorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  buttonClicked() {
    console.log('Yes,buttonClicked');
    throw new Error('Some Exception');
  }

  button2Clicked() {
    console.log('Yes,other buttonClicked');
    throw new Error('Some Exception');
  }

}
