import { Component, OnInit } from '@angular/core';

//adding Rxjs classes and operators/static methods

import { observable, interval, Subscription } from 'rxjs';
import { take } from 'rxjs/operators';


import { timer } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent implements OnInit {

  constructor() { }

  // mySubscription: Subscription;

  ngOnInit(): void {
    this.example2();
  }

  example() {
    const randNum = interval(4000);
    randNum.subscribe((number: number) => {
      console.log(number);
    })

  }

  example2() {
    const randNum = interval(4000);
    const limitRandNum = randNum.pipe(take(10));
    limitRandNum.subscribe((number: number) => {
      console.log(number);
    }, undefined, () => {
      console.log('Subscription Completed');
    })

  }

  ngonDestroy() {
    // this.randNum.unsubscribe();
  }

}
