import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';
// import { NgForm } from '@angular/forms';

import { NoweZamowienieModule } from './nowe-zamowienie.module';

import { NoweZamowienie } from './nowe-zamowienie';

import { NoweZamowienieService } from './nowe-zamowienie.service';

@Component({
	// moduleId: module.id,
	selector: 'app-nowe-zamowienie',
	templateUrl: './nowe-zamowienie.component.html',
	styleUrls: ['./nowe-zamowienie.component.css'],
	providers: [NoweZamowienieService]
})
export class NoweZamowienieComponent implements OnInit {

	type: string;
	private sub: any;
	dateValue: any;

	constructor(private route: ActivatedRoute, private noweZamowienieService: NoweZamowienieService) {
		this.dateValue = new Date();
	 }

	ngOnInit() {
		this.sub = this.route.params.subscribe(params => {
			this.type = params['type'];
		})

	}

	onSubmitForm(order){
		console.log(order);
		order.typ_zamowienia = this.type.toUpperCase();
		this.noweZamowienieService.saveOrder(order)
			.subscribe(() => console.log('Success! --------'), error => console.error(error))

	}

}