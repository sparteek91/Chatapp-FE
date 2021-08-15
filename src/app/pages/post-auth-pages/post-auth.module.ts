import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { PostAuthRoutingModule } from './post-auth-routing.module'
import { HomeComponent } from './home/home.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        PostAuthRoutingModule
    ],
    declarations: [
        HomeComponent
    ],
})
export class PostAuthModule { }
