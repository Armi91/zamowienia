import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// import {Http, HTTP_PROVIDERS} from '@angular/http';

import { AppComponent } from './app.component';

import { AUTH_PROVIDERS } from 'angular2-jwt'

// import { AuthGuard } from './common/auth.guard';

import { AppRoutingModule } from './app-routing.module';
import { ClientModule } from './client/client.module';

import { LoginComponent } from './login/login.component';
import { ClientComponent } from './client/client.component';

import { LoginService } from './login/login.service';

@NgModule({
  declarations: [
    AppComponent,
    // ZamowieniaComponent,
    // NoweZamowienieComponent,
    LoginComponent,
    ClientComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ClientModule,
    AppRoutingModule
  ],
  providers: [AUTH_PROVIDERS, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
