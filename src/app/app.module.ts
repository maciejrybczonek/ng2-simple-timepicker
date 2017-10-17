import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { TimepickerModule } from '../../timepicker/timepicker.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    TimepickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
