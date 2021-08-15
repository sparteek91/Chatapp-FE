import { environment } from "../../../environments/environment";

export class ApiRoutes {
	private static apiBaseUrl: string = environment.apiBaseUrl + 'api/';

	// pre auth
	public static get login(): string {
		return this.apiBaseUrl + "auth/login/";
	}

	public static get signup(): string {
		return this.apiBaseUrl + "auth/signup/";
	}

	public static get getotp(): string {
		return this.apiBaseUrl + "auth/getotp/";
	}
}