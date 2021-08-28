import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { APP_ROUTES, ApiRoutes } from '../../../shared/routes';
import { AuthService } from '../../../shared/services/auth.service';
import { DataService } from '../../../shared/services/data.service';
import { telCodeOptions, otpSettings } from '../../../shared/utilities';

@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
	routes = APP_ROUTES;
	screen: number = 1;	// 1: register form input, 2: otp input 
	isSubmitting: boolean = false;
	form: FormGroup = new FormGroup({});
	otpSettings = otpSettings;
	telCodeOptions = telCodeOptions;
	subscription: Subscription = new Subscription();

	constructor(private auth: AuthService, private router: Router, private ds: DataService) { }

	ngOnInit(): void {
		this.intiForm();
	}

	get formData() {
		return this.form.controls;
	}

	private intiForm(): void {
		this.form = new FormGroup({
			name: new FormControl('', [Validators.required]),
			email: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)]),
			mobile: new FormControl('', [Validators.required]),
			password: new FormControl('', [Validators.required, Validators.minLength(6)]),
			countryCode: new FormControl('', [Validators.required]),
			dialCode: new FormControl('', [Validators.required]),
			terms: new FormControl(false, [Validators.requiredTrue])
		}, { 'updateOn': 'change' });

		const mobileChange: any = this.form.get('mobile')?.valueChanges.subscribe((data: any) => {
			if (data) {
				this.form.get('countryCode')?.setValue(data.countryCode);
				this.form.get('dialCode')?.setValue(data.dialCode);
			}
		});
		this.subscription.add(mobileChange);
	}

	ngOnDestroy(): void {
		this.subscription.unsubscribe();
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
			this.form.removeControl('otp');
			this.getOtp();
		}
	}

	previousScreen(screen: number): void {
		this.screen = screen;
		this.form.removeControl('otp');
	}

	getOtp(): void {
		if (this.form.invalid) {
			this.isSubmitting = true;
			return;
		}
		this.isSubmitting = false;
		const payload: any = {
			mobile: this.form.get('mobile')?.value.e164Number || this.form.get('mobile')?.value,
			action: 'registration',
			email: this.form.get('email')?.value
		}
		this.ds.post(ApiRoutes.getOtp, payload).subscribe((res: any) => {
			if (res.status) {
				this.screen = 2;
				this.form.addControl('hash', new FormControl(res.data.hash));
				this.form.addControl('otp', new FormControl('', [Validators.required]));
			}
		}, err => console.log(err));
	}

	submit(): void {
		if (this.form.invalid) {
			this.isSubmitting = true;
			return;
		}
		this.isSubmitting = false;
		console.log(this.payload);
		this.auth.authentication(ApiRoutes.signup, this.payload).subscribe((res: any) => {
			if (res.status) {
				this.router.navigate([APP_ROUTES.home]);
			}
		}, err => console.log(err));
	}

	get payload(): any {
		return {
			countryCode: this.form.get('countryCode')?.value,
			dialCode: this.form.get('dialCode')?.value,
			hash: this.form.get('hash')?.value,
			mobile: this.form.get('mobile')?.value.e164Number || this.form.get('mobile')?.value,
			name: this.form.get('name')?.value,
			otp: this.form.get('otp')?.value,
			password: this.form.get('password')?.value,
			terms: this.form.get('terms')?.value,
			email: this.form.get('email')?.value,
		}
	}
}