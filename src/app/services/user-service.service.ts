import { HttpClient } from '@angular/common/http';
import { Injectable, isDevMode } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(private http: HttpClient) { }

  BASE_URL = !isDevMode() ? '/api/' : '//localhost:3030/api/'

  login(user: User) {
    return this.http.post<{ answer: Object }>(`${this.BASE_URL}auth/login`, { ...user })
  }
  signup(user: User) {
    return this.http.post<{ answer: Object }>(`${this.BASE_URL}auth/signup`, { ...user })
  }
  logout(empty: null) {
    return this.http.post<{ answer: Object }>(`${this.BASE_URL}auth/logout`, empty)
  }
}
