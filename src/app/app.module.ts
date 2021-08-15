import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

// libs
import { ToastrModule } from "ngx-toastr";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PreAuthLayoutComponent } from './layouts/pre-auth-layout/pre-auth-layout.component';
import { PostAuthLayoutComponent } from './layouts/post-auth-layout/post-auth-layout.component';
import { AuthService } from './shared/services/auth.service';
import { LocalStorage } from './shared/services/storage.service';
import { RequestInterceptor, InternetInterceptor, ResponseInterceptor } from "./interceptors";
import { AuthGuard, UnAuthGuard } from './shared/guards';

@NgModule({
	declarations: [
		AppComponent,
		PreAuthLayoutComponent,
		PostAuthLayoutComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		ToastrModule.forRoot(),
		HttpClientModule
	],
	providers: [
		LocalStorage,
		AuthService,
		AuthGuard,
		UnAuthGuard,
		{ provide: HTTP_INTERCEPTORS, useClass: InternetInterceptor, multi: true },
		{ provide: HTTP_INTERCEPTORS, useClass: RequestInterceptor, multi: true },
		{ provide: HTTP_INTERCEPTORS, useClass: ResponseInterceptor, multi: true },
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
