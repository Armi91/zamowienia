import { Component, OnInit } from '@angular/core';

import { ZamowieniaService } from './zamowienia.service';

@Component({
  selector: 'app-zamowienia',
  templateUrl: './zamowienia.component.html',
  styleUrls: ['./zamowienia.component.css'],
  providers: [ZamowieniaService]
})
export class ZamowieniaComponent implements OnInit {

	orders: any;

	constructor(private zamowieniaService: ZamowieniaService) { }

	ngOnInit() {
		this.orders = [];
		this.zamowieniaService.getOrders()
			.subscribe(
				ordersArray  => this.orders = ordersArray,
				error => console.error(error)
			);

		// console.log(this.orders[0]);
	}

}
