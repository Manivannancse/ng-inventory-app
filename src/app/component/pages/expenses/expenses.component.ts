import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-expenses',
  template: `
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./expenses.component.scss']
})
export class ExpensesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
