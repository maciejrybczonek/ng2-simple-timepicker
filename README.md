# **Time picker for Angular2**

Angular2 wrapper around jQuery time picker by https://github.com/jonthornton/jquery-timepicker
Forked from https://github.com/bharatraj88/angular2-timepicker

Note that this is a very quick and dirty "hack" to get it running in Angular2

**Requirements:**

1. Angular2 version 4.2.4
2. Typescript version 2.3.4
3. jQuery version 3.2.1

**Usage:**

      <input type="text" class="timepicker" 
      [options]="{disableTextInput: false,
			      'timeFormat': 'h:i A',
			      showDuration: false}"/>

Add TimePickerComponent into your component directives. Time picker is applied only if your input component has class 'timepicker'.

You can use ngModel bidings and also listen to events in angular2 way. The model is updated with the value as per the format given in the options.

**Example**

         <input type="text" [ngModel]="time" (changeTime)="doSomething();"
      class="form-control timepicker" [ngClass]="custom-cls"
      [options]="{disableTextInput: false,'timeFormat':'HH:mm',showDuration:false}"/>

**Importing**

    import { TimePickerModule } from "ng2-simple-timepicker/timepicker";

**Options and Events:**

Usage same as mentioned in https://github.com/jonthornton/jquery-timepicker.

Changing the options handles the destroy and initialize of time picker component by itself with new options.

**Help**

Submit a issue in [github](https://github.com/daffodilistic/ng2-simple-timepicker/issues/new) with details of your problems.