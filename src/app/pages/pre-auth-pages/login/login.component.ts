import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { APP_ROUTES, ApiRoutes } from '../../../shared/routes';
import { AuthService } from '../../../shared/services/auth.service';
import { DataService } from '../../../shared/services/data.service';
import { telCodeOptions, otpSettings } from '../../../shared/utilities';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

	routes = APP_ROUTES;
	screen: number = 1;	// 1: mobile input, 2: password input, 3: otp input 
	isSubmitting: boolean = false;
	form: FormGroup = new FormGroup({});
	otpSettings = otpSettings;
	telCodeOptions = telCodeOptions;

	constructor(private auth: AuthService, private router: Router, private ds: DataService) { }

	ngOnInit(): void {
		this.intiForm();
	}

	get formData() {
		return this.form.controls;
	}

	private intiForm(): void {
		this.form = new FormGroup({
			mobile: new FormControl('', [Validators.required]),
			logintype: new FormControl(0),	// 0: password, 1: otp
		}, { 'updateOn': 'change' });
	}

	nextScreen(screen: number): void {
		if (this.form.get('mobile')?.invalid) {
			this.isSubmitting = true;
			return;
		}
		this.isSubmitting = false;
		if (screen === 2) {
			this.screen = screen;
			this.form.addControl('password', new FormControl('', [Validators.required]));
			this.form.get('logintype')?.setValue(0);
		} else if (screen === 3) {
			this.form.addControl('otp', new FormControl('', [Validators.required]));
			this.form.get('logintype')?.setValue(1);
			this.getOtp(screen);
		}
	}

	onInputChange(e: any): void {
		if (e.length == this.otpSettings.length) {
			// e will emit values entered as otp and,
			this.form.get('otp')?.setValue(e);
			this.submit();
		} else if (e == -1) {
			// if e == -1, timer has stopped and resend button enables
		} else if (e == -2) {
			// e == -2, resend otp button click handler
			this.getOtp(3);
		}
	}

	getOtp(screen: number): void {
		const payload: any = {
			mobile: this.form.get('mobile')?.value.e164Number || this.form.get('mobile')?.value,
			action: 'login'
		}
		this.ds.post(ApiRoutes.getOtp, payload).subscribe((res: any) => {
			if (res.status) {
				this.screen = screen;
				this.form.addControl('hash', new FormControl(res.data.hash));
			}
		}, err => console.log(err));
	}

	submit(): void {
		if (this.form.invalid) {
			this.isSubmitting = true;
			return;
		}
		this.isSubmitting = false;
		const mobileNumber: string = this.form.get('mobile')?.value.e164Number || this.form.get('mobile')?.value;
		this.form.get('mobile')?.setValue(mobileNumber);
		this.auth.authentication(ApiRoutes.login, this.form.value).subscribe((res: any) => {
			if (res.status) {
				this.router.navigate([APP_ROUTES.home]);
			}
		}, err => console.log(err));
	}
}