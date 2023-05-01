import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { UsersDataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnDestroy {
  loadingSubscription$: Subscription;
  loading!: Boolean;

  constructor(private dataService: UsersDataService) {
    this.loadingSubscription$ = this.dataService
      .getLoadingStatus()
      .subscribe((res) => {
        this.loading = res.valueOf();
      });
  }

  ngOnDestroy(): void {
    this.loadingSubscription$.unsubscribe();
  }
}
