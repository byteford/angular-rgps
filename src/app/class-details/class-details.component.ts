import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'

import {classes} from '../classes'
@Component({
  selector: 'app-class-details',
  templateUrl: './class-details.component.html',
  styleUrls: ['./class-details.component.css']
})
export class ClassDetailsComponent implements OnInit {
  classes;
  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params =>{
      this.classes = classes.find(element => element.abv == params.get('classAbv'));
    });
  }

}