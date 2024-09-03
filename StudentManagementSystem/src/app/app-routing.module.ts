import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { WelcomPageComponent } from './welcom-page/welcom-page.component';
import { StudentListPageComponent } from './student-list-page/student-list-page.component';
import { CreatePageComponent } from './create-page/create-page.component';
import { AccountManagementPageComponent } from './account-management-page/account-management-page.component';


const routes: Routes = [
  { path: '', component: LoginPageComponent },
  { path: 'welcome-page', component: WelcomPageComponent },
  { path: 'student-list-page', component: StudentListPageComponent },
  { path: 'create-page', component: CreatePageComponent },
  { path: 'account-management-page', component: AccountManagementPageComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
