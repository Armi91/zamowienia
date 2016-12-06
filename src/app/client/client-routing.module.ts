import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ClientModule } from './client.module';

import { LoggedInGuard } from '../login/logged-in.guard';

import { ClientComponent } from './client.component';
import { ZamowieniaComponent } from './zamowienia/zamowienia.component';
import { NoweZamowienieComponent } from './nowe-zamowienie/nowe-zamowienie.component';

@NgModule({
	imports: [
		RouterModule.forChild([
			{
				path: 'user',
				component: ClientComponent,
				// canActivate: [LoggedInGuard],
				children: [
					{
						path: 'zamowienia',
						component: ZamowieniaComponent
					},
					{
						path: 'nowe-zamowienie/:type',
						component: NoweZamowienieComponent
					}
				]
			}
		])
	],
	exports: [RouterModule],
	providers: [LoggedInGuard]
})

export class ClientRoutingModule { }