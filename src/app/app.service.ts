import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const api ="https://server-97i3.onrender.com/api/posts/user"
@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http:HttpClient) { }
  getAllUser(data:string):any {
    return this.http.get<any>(api);
  }
}
