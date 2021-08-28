import { environment } from "../../../environments/environment";

export class ApiRoutes {
	private static apiBaseUrl: string = environment.apiBaseUrl + 'api/';

	// pre auth
	public static get login(): string {
		return this.apiBaseUrl + "auth/login";
	}

	public static get getOtp(): string {
		return this.apiBaseUrl + "auth/getotp";
	}

	public static get signup(): string {
		return this.apiBaseUrl + "auth/signup";
	}

	public static get forgotPass(): string {
		return this.apiBaseUrl + "auth/forgot-password";
	}
}