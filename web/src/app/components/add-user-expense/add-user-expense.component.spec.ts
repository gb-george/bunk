import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUserExpenseComponent } from './add-user-expense.component';

describe('AddUserExpenseComponent', () => {
  let component: AddUserExpenseComponent;
  let fixture: ComponentFixture<AddUserExpenseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddUserExpenseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddUserExpenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
