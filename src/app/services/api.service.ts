import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private client: HttpClient) { }

  getAllUsers() : Observable<User[]> {
    return this.client.get<User[]>(`http://localhost:3001/users`);
  }

  getUserByNickname(nickname: string) : Observable<User> {
    return this.client.get<User>(`http://localhost:3001/users/${nickname}`);
  }
}
