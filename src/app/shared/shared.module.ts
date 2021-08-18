import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

//LIBS
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';
import { AngularOtpLibModule } from 'angular-otp-box';

@NgModule({
    exports: [
        NgxIntlTelInputModule,
        AngularOtpLibModule
    ],
    imports: [
        CommonModule,
        NgxIntlTelInputModule,
        AngularOtpLibModule
    ],
    declarations: [],
    providers: [],
})
export class SharedModule { }
