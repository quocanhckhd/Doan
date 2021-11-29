import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '../auth.service';
import { LoginComponent } from '../login/login.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-taskbar',
  templateUrl: './taskbar.component.html',
  styleUrls: ['./taskbar.component.css']
})
export class TaskbarComponent implements OnInit {
 // @ViewChild(LoginComponent)
 // private userLogin: LoginComponent;
  user=this.authService.getLoggedInUserName();
  constructor(private authService: AuthService,private router: Router) { }

  ngOnInit(): void {
  }
  logout(){
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
