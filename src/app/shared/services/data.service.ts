import { Injectable } from '@angular/core';
import { HttpClient, HttpEventType, HttpHeaders, HttpResponse } from '@angular/common/http';
// import { forkJoin } from 'rxjs/internal/observable/forkJoin';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
// import { saveAs } from '@progress/kendo-file-saver';

@Injectable({
	providedIn: 'root',
})

export class DataService {

	constructor(private http: HttpClient) { }

	public get(url: string): Observable<any> {
		return this.http.get<any>(url).pipe(
			map((data) => {
				return data;
			})
		);
	}

	public post(url: string, reqBody: any): Observable<any> {
		return this.http.post<any>(url, reqBody).pipe(
			map((data) => {
				return data;
			})
		);
	}

	public delete(url: string) {
		return this.http.delete<any>(url).pipe(
			map((data) => {
				return data;
			})
		);
	}

	public put(url: string, reqBody: any): Observable<any> {
		return this.http.put<any>(url, reqBody).pipe(
			map((data) => {
				return data;
			})
		);
	}

	public patch(url: string, reqBody: any): Observable<any> {
		return this.http.patch<any>(url, reqBody).pipe(
			map((data) => {
				return data;
			})
		);
	}

	// for making query params for api urls
	public formUrlParam(url: string, data: any): string {
		let queryString: string = '';
		for (const key in data) {
			if (data.hasOwnProperty(key) && data[key]) {
				if (!queryString) {
					queryString = `?${key}=${data[key]}`;
				} else {
					queryString += `&${key}=${data[key]}`;
				}
			}
		}
		return url + queryString;
	}

	// public downloadDocumentBlob(downLoadUrl: string, fileName: string, extension: string, acceptType: string = '', payload: any = {}): Observable<any> {
	// 	var HTTPOptions = {
	// 		headers: new HttpHeaders({ Accept: acceptType }),
	// 		observe: 'response' as 'body', // to display the full response & as 'body' for type cast
	// 		responseType: 'blob' as 'json',
	// 	};
	// 	return this.http.get(downLoadUrl, HTTPOptions).pipe(
	// 		map((res: any) => {
	// 			// 'application/octet-stream'
	// 			var blob = new Blob([res.body], { type: acceptType });
	// 			saveAs(blob, fileName + extension);
	// 			return res;
	// 		})
	// 	);
	// }
}