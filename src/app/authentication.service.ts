import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {


  authApi = `${environment.api}/user`;

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  adminLogin(data) {
    return this.http.post(`${this.authApi}/login`, data);
  }

  adminRegister(data) {
    return this.http.post(`${this.authApi}/signup`, data);
  }

  forgetPassword(data) {
    return this.http.post(`${this.authApi}/forgetpassword`, data);
  }

  loggedIn() {
    return !!localStorage.getItem('token');
  }

  logoutUser() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  getToken() {
    return localStorage.getItem('token');
  }
}
