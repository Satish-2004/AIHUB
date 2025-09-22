import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthResponse } from './AuthResponse.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }
  private urlsignup = "http://13.61.187.96:8080/auth/signup";
  private urllogin = "http://13.61.187.96:8080/auth/signin";

  signup(user: any): Observable<String>{
    return this.http.post<String>(this.urlsignup, user);
  }

  login(user: any): Observable<AuthResponse>{
    return this.http.post<AuthResponse>(this.urllogin, user);
  }

}
