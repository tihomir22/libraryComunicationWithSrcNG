import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {OrderListModule} from 'primeng/orderlist';
import {DialogModule} from 'primeng/dialog';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DialogoComponent } from './dialogo/dialogo.component';
import { DembowLibraryModule } from 'projects/dembow-library/src/public-api';

@NgModule({
  declarations: [
    AppComponent,
    DialogoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    OrderListModule,
    DialogModule,
    DembowLibraryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
