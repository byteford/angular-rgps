import { Component, OnInit } from '@angular/core';

import { classes } from '../classes';
@Component({
  selector: 'app-class-list',
  templateUrl: './class-list.component.html',
  styleUrls: ['./class-list.component.css']
})
export class ClassListComponent implements OnInit {
  classes = classes;
  constructor() { }

  ngOnInit() {
  }

}