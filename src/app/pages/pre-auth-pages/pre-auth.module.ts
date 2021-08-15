import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { PreAuthRoutingModule } from './pre-auth-routing.module';
import { LoginComponent } from './login/login.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        PreAuthRoutingModule
    ],
    declarations: [
        LoginComponent
    ],
})
export class PreAuthModule { }
