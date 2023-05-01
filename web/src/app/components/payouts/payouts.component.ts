import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { IExpenseReport } from 'src/app/interfaces';

@Component({
  selector: 'bunk-payouts',
  templateUrl: './payouts.component.html',
  styleUrls: ['./payouts.component.scss'],
})
export class PayoutsComponent {
  payoutsArr!: IExpenseReport[];
  loadingSubscription$!: Subscription;

  setPayoutsArr(arr: any[]): void {
    this.payoutsArr = arr;
  }
}
