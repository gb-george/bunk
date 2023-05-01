import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpensesTableComponent } from './expenses-table/expenses-table.component';
import { AddUserExpenseComponent } from './add-user-expense/add-user-expense.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { PayoutsSevices } from '../services/payout.service';
import { PayoutsComponent } from './payouts/payouts.component';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSortModule } from '@angular/material/sort';
import { SettleUpComponent } from './settle-up/settle-up.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { UsersDataService } from '../services/data.service';



const sharedComponentsList = [
  ExpensesTableComponent,
  AddUserExpenseComponent,
  PayoutsComponent,
  SettleUpComponent,
];

@NgModule({
  declarations: [sharedComponentsList],
  imports: [
    CommonModule,
    BrowserModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,

  ],
  exports: [sharedComponentsList],
  providers: [PayoutsSevices, UsersDataService],
})
export class SharedComponentsModule {}
