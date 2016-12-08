import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/Rx';

import { ActivatedRoute } from '@angular/router';


@Injectable()
export class ZamowieniaService {

	sub: any;
	url: any;

	constructor(private http: Http, private route: ActivatedRoute) {
		this.sub = this.route.params.subscribe(params => {
			this.url = params;
			// console.log(this.url);
		});
	}
	getOrders(){
		const headers = new Headers({'Content-Type': 'application/json'});
		return this.http.get('http://localhost:3000/user/zamowienia')
			.map((data: Response) => {
				const extracted = data.json();
				const ordersArray = [];
				let order;
				for (let element of extracted.data){
					order = element;
					ordersArray.push(order);
				}
				console.log(ordersArray);
				return ordersArray;
			});
	}
}
