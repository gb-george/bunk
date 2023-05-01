import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IExpenseReport } from 'src/app/interfaces/expences-response.interface';
import { IExpense } from 'src/app/interfaces/expense.interface';
import { UsersDataService } from 'src/app/services/data.service';
import { PayoutsSevices } from 'src/app/services/payout.service';

@Component({
  selector: 'add-user-expense',
  templateUrl: './add-user-expense.component.html',
  styleUrls: ['./add-user-expense.component.scss'],
})
export class AddUserExpenseComponent {
  expenses: IExpense[] = [];
  payoutsArr: IExpenseReport[] = [];

  expenseForm!: FormGroup;

  constructor(private dataService: UsersDataService, private fb: FormBuilder) {}

  addExpense() {
    this.dataService.addData(this.expenseForm.value);
    this.expenseForm.reset();
  }
  ngOnInit() {
    this.expenseForm = this.fb.group({
      name: ['', Validators.required],
      expense: ['', [Validators.required, Validators.min(0)]],
    });
  }

  clearForm() {
    this.expenseForm.reset();
  }
}
