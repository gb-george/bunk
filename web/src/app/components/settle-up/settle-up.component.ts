import { Component, EventEmitter, Output } from '@angular/core';
import { IExpense, IExpenseReport } from 'src/app/interfaces';
import { UsersDataService } from 'src/app/services/data.service';
import { PayoutsSevices } from 'src/app/services/payout.service';

@Component({
  selector: 'bunk-settle-up',
  templateUrl: './settle-up.component.html',
})
export class SettleUpComponent {
  @Output() payoutsArrEmit: EventEmitter<IExpenseReport[]> = new EventEmitter();
  constructor(
    private dataService: UsersDataService,
    private payoutService: PayoutsSevices
  ) {}

  settleUp() {
    this.dataService.setLoadingStatus(true);
    const usersDataPayload: IExpense[] = this.dataService.getDataValue();
    this.payoutService.settleUp(usersDataPayload).subscribe(
      (res) => {
        const payoutsArr: IExpenseReport[] = res;
        this.payoutsArrEmit.emit(payoutsArr);
        // setTimeout(()=>{
        //   this.dataService.setLoadingStatus(false);
        // },200)
        this.dataService.setLoadingStatus(false);
      },
      (err) => {
        this.dataService.setLoadingStatus(false);
        console.log('Something went wrong !!!', err);
      }
    );
  }
}
