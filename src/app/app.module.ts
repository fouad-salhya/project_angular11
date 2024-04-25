import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListeMobileComponent } from './components/liste-mobile/liste-mobile.component';
import { DetailMobileComponent } from './components/detail-mobile/detail-mobile.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegistreComponent } from './components/registre/registre.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { FlashMessagesModule } from 'flash-messages-angular';
import { AddMobileComponent } from './components/add-mobile/add-mobile.component'
@NgModule({
  declarations: [
    AppComponent,
    ListeMobileComponent,
    DetailMobileComponent,
    NavbarComponent,
    LoginComponent,
    RegistreComponent,
    PageNotFoundComponent,
    AddMobileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    FlashMessagesModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
