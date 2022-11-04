import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() message: string = '';

  // Child --> Parent communctions

  @Output() notify = new EventEmitter();
  // or specify the type @Output() notify:EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  // Trigger a custom event

  triggerCustomEvent(str: string) {
    this.notify.emit(str);
  }

}
