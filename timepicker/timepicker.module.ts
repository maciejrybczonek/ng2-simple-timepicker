import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TimePicker } from './timepicker/timepicker';

@NgModule({
    imports: [CommonModule, FormsModule],
    declarations: [TimePicker],
    exports: [TimePicker]
})
export class TimePickerModule { }