import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {
  getUserToken() {
    return localStorage.getItem('token') || '';
  }

  setUserToken(token: string) {
    localStorage.setItem('token', token);
  }

  clearUserToken() {
    localStorage.removeItem('token');
  }
}
