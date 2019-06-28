import { Component, OnInit } from '@angular/core';
import { Expenses } from 'src/app/shared/expenses/expense';
import { ExpensesService } from 'src/app/shared/expenses/expenseservice';

@Component({
  selector: 'app-expenses-view',
  templateUrl: './expenses-view.component.html',
  styleUrls: ['./expenses-view.component.scss']
})
export class ExpensesViewComponent implements OnInit {

  displayDialog: boolean;

  expense: Expenses = {};

  selectedExpenses: Expenses;

  newExpense: boolean;

  expenses: Expenses[];

  cols: any[];

  constructor(private expensesService: ExpensesService) { }

  ngOnInit() {
    this.expensesService.getExpensesSmall().then(expenses => this.expenses = expenses);

    this.cols = [
      { field: 'type', header: 'Type' },
      { field: 'date', header: 'Date' }
    ];
  }

  showDialogToAdd() {
    this.newExpense = true;
    this.expense = {};
    this.displayDialog = true;
  }

  save() {
    let expenses = [...this.expenses];
    if (this.newExpense)
      expenses.push(this.expense);
    else
      expenses[this.expenses.indexOf(this.selectedExpenses)] = this.expense;

    this.expenses = expenses;
    this.expense = null;
    this.displayDialog = false;
  }

  delete() {
    let index = this.expenses.indexOf(this.selectedExpenses);
    this.expenses = this.expenses.filter((val, i) => i != index);
    this.expense = null;
    this.displayDialog = false;
  }

  onRowSelect(event) {
    this.newExpense = false;
    this.expense = this.cloneexpense(event.data);
    this.displayDialog = true;
  }

  cloneexpense(c: Expenses): Expenses {
    let expense = {};
    for (let prop in c) {
      expense[prop] = c[prop];
    }
    return expense;
  }

}
