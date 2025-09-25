import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Tool } from './tools.model';
import { Category } from '../categories.model';

@Injectable({
  providedIn: 'root'
})
export class ToolsService {

  constructor(private http: HttpClient) { }
  private url = "http://13.60.59.241:8080/tools";
  private url2 = "http://13.60.59.241:8080/categories";
  private url3 = "http://13.60.59.241:8080/users";
  gettoken = JSON.parse(localStorage.getItem('token') || '{}');
  userId = localStorage.getItem('userid') || '';


  ngOnInit(){
    console.log(this.gettoken);
  }

  getFeaturedTools(): Observable<Tool[]>{
    const options = {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.gettoken}`

    }}
    return this.http.get<Tool[]>(this.url, options);
  }

  getCategories(): Observable<Category[]> {
    const options = {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.gettoken}`
      }
    };
    return this.http.get<Category[]>(this.url2, options);
  }

  getcartItems(userId: string): Observable<any> {
    const options = {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.gettoken}` 
      }
    };
    return this.http.get<any>(`${this.url3}/${userId}/tools`, options);
  }

  addToCart(toolId: number): Observable<any> {
    console.log(this.userId);
    const options = {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.gettoken}`
      }
    };
    return this.http.post<any>(`${this.url3}/userId/${this.userId}/toolId/${toolId}`, {}, options);
  }

  removeFromCart(toolId: number): Observable<any> {
    console.log(this.userId);
    const options = {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.gettoken}`
      }
    };
    return this.http.delete<any>(`${this.url3}/userId/${this.userId}/toolId/${toolId}`, options);
  }
}