import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css'],
})
export class DirectivesComponent implements OnInit {
  constructor() {}

  showTemplate = true;

  fruitsArr: string[] = [
    'apple',
    'banana',
    'mango',
    'grapes',
    'orange',
    'watermelon',
  ];

  ngOnInit(): void {}
}
