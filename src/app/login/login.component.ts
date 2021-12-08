import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm = this.fb.group({
    username: [''],
    password: ['']
  });
  constructor(private fb: FormBuilder, private router: Router, private authService: AuthService) { }
  errorMessage = 'Đăng nhập thất bại';
  successMessage: string;
  invalidLogin = false;
  loginSuccess = false;
  username="";
  id="";
  ngOnInit(): void {
  }
  login() {
    this.authService.login(this.loginForm.value.username,
    this.loginForm.value.password).subscribe((response)=> {
    var code=response.status;
    console.log("status code:"+code);
    if(code==200){
    this.invalidLogin = false;
    this.loginSuccess = true;
    this.successMessage = 'Login Successful.';
      localStorage.setItem('userId', response.body['id_user']);
      // const userId = localStorage.getItem('userId');
    // localStorage.setItem('user', JSON.stringify(response.body)); // nếu cần lấy toàn bộ thông tin user 
    // const user = localStorage.getItem('user');
    this.authService.username=this.loginForm.value.username;
    this.authService.password=this.loginForm.value.password;
    this.authService.registerSuccessfulLogin(this.loginForm.value.username)
    
    this.router.navigate(['/index']);
    }
    }, () => {
    this.invalidLogin = true;
    this.loginSuccess = false;
    });
    }
}
