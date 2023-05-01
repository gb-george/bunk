import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { IExpense } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class UsersDataService {
  private data$ = new BehaviorSubject<IExpense[]>([]);
  private loading$ = new BehaviorSubject<Boolean>(false);

  private expenses: IExpense[] = [
    { name: 'Alice', expense: 10 },
    { name: 'Bob', expense: 20 },
    { name: 'Alice', expense: 10 },
    { name: 'Dave', expense: 220 },
  ];
  constructor() {
    this.setUsersData(this.expenses);
  }

  setUsersData(value: IExpense[]) {
    this.data$.next(value);
  }

  addData(value: IExpense) {
    const currentState = this.data$.getValue();
    this.data$.next([...currentState, value]);
  }

  getData(): Observable<IExpense[]> {
    return this.data$.asObservable();
  }

  getDataValue(): IExpense[] {
    return this.data$.getValue();
  }

  removeAllData() {
    this.data$.next([]);
  }

  setLoadingStatus(status: Boolean) {
    this.loading$.next(status);
  }

  getLoadingStatus(): Observable<Boolean> {
    return this.loading$.asObservable();
  }
}
