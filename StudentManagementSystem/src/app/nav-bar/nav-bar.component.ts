import { Component } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  constructor(private router: Router) { }

  onHome() {
    this.router.navigate(['/welcome-page']);
  }

  onStudentList() {
    this.router.navigate(['/student-list-page']);
  }

  onCreate() {
    this.router.navigate(['/create-page']);
  }

  onAccounts() {
    this.router.navigate(['/account-management-page']);
  }

  onLogOut() {
    this.router.navigate(['/']);
  }
}
