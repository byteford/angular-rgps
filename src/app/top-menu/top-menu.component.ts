import { Component, OnInit } from '@angular/core';
import{classes} from '../classes'
@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.css']
})
export class TopMenuComponent implements OnInit {
  classes = classes;
  constructor() { }

  ngOnInit() {
  }
  toggle(){
    window.alert('toggle');
  }
}