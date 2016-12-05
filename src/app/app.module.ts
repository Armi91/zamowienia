import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// import {Http, HTTP_PROVIDERS} from '@angular/http';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { IndywidualneComponent } from './indywidualne/indywidualne.component';
import { ZamowieniaComponent } from './zamowienia/zamowienia.component';
import { NoweZamowienieComponent } from './nowe-zamowienie/nowe-zamowienie.component';

@NgModule({
  declarations: [
    AppComponent,
    IndywidualneComponent,
    ZamowieniaComponent,
    NoweZamowienieComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
