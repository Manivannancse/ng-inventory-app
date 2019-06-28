import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Expenses } from './expense';


@Injectable({
  providedIn: 'root',
})

export class ExpensesService {

    constructor(private http: HttpClient) { }

    getExpensesSmall() {
    return this.http.get<any>('assets/data/expense.json')
      .toPromise()
      .then(res => <Expenses[]>res.data)
      .then(data => { return data; });
    }
}