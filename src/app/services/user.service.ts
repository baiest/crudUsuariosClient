import { User, UserForm } from '../models/User';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  private API_URL = 'http://localhost:8000/api/users'

  constructor(
    private http: HttpClient
  ) { }
  
  getAll() {
    return this.http.get<{data: User[]}>(this.API_URL)
  }
  
  getById(id: string){
    return this.http.get<{data: User}>(`${this.API_URL}/${id}`)
  }
  create(user: UserForm){
    return this.http.post(this.API_URL, user)
  }
  getByIdEdit(id: string){
    return this.http.get<{data: UserForm}>(`${this.API_URL}/${id}/edit/`)
  }
  update(id: string, user: UserForm){
    return this.http.put(`${this.API_URL}/${id}`, user)
  }
  
  delete(id: string){
    return this.http.delete(`${this.API_URL}/${id}`)
  }
}
