import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  person: any = [
    {
      'name': 'sandeep',
      'age': 23
    },
    {
      'name': 'Andy',
      'age': 27
    },
    {
      'name': 'Robert',
      'age': 32
    }
  ]

  employee: any = [
    { 'name': 'Albert', 'age': '32', 'salary': '$2323', 'country': 'usa' },
    { 'name': 'Bravo', 'age': '34', 'salary': '$1435', 'country': 'uk' },
    { 'name': 'Carl', 'age': '30', 'salary': '$2313', 'country': 'uk' },
    { 'name': 'Dennyt', 'age': '26', 'salary': '$2563', 'country': 'usa' },
    { 'name': 'elight', 'age': '21', 'salary': '$2022', 'country': 'usa' },
  ]

}
