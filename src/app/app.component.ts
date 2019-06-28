import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
import { Router, Event } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'A2Z';
  currentPath = [];
  items: MenuItem[];


  constructor(private router: Router) {
  }
  ngOnInit() {
    this.router.events.subscribe((event: Event) => {
      if(event['url']) {
        this.currentPath = event['url'].split('/')
          .filter((a)=> a)
          .map((a) => ({label: a.replace(/-/g, " ")}))
        this.items = [{label:'Home'}].concat(this.currentPath);
      }
    })
    // this.items = [{label:'Home'}];
  }
}
