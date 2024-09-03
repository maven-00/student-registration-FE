import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccountManagementPageComponent } from './account-management-page/account-management-page.component';
import { CreatePageComponent } from './create-page/create-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { StudentListPageComponent } from './student-list-page/student-list-page.component';
import { WelcomPageComponent } from './welcom-page/welcom-page.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    AccountManagementPageComponent,
    CreatePageComponent,
    LoginPageComponent,
    NavBarComponent,
    StudentListPageComponent,
    WelcomPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
