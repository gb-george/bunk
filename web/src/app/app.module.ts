import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { UrlPrefixConfigModule } from './interceptor/url-prefix.interceptor';
import { SharedComponentsModule } from './components/shared-components.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    MatInputModule,
    SharedComponentsModule,
    HttpClientModule,
    UrlPrefixConfigModule,
    NoopAnimationsModule,
    MatToolbarModule,
    MatFormFieldModule
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
