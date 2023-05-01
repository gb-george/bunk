import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Observable,Subscription } from 'rxjs';
import { IExpense } from 'src/app/interfaces';
import { UsersDataService } from 'src/app/services/data.service';

@Component({
  selector: 'bunk-expenses-table',
  templateUrl: './expenses-table.component.html',
  styleUrls: ['./expenses-table.component.scss'],
})
export class ExpensesTableComponent implements OnInit, OnDestroy {
  expenses$!: Observable<IExpense[]>;
  dataSource!: MatTableDataSource<IExpense>;
  displayedColumns: string[] = ['name', 'expense'];
  dataServSubscription$!: Subscription;

  constructor(private dataService: UsersDataService) {}

  ngOnInit() {
    this.dataServSubscription$ = this.dataService.getData().subscribe((res) => {
      this.dataSource = new MatTableDataSource(res);
    });
  } 

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  clearTable() {
    this.dataService.removeAllData();
  }

  ngOnDestroy(): void {
    this.dataServSubscription$.unsubscribe();
  }
}
