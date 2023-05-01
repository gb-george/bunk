import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { IExpense } from '../interfaces/expense.interface';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable()
export class PayoutsSevices {
  constructor(private http: HttpClient) {}

  settleUp(payload: IExpense[]): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.post('payouts',  payload , {headers});
  }
}
