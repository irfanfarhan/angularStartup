import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable()
export class UserDetailsService {

  constructor(private http: HttpClient) { }
  getProducts(id?: any) {
    let url = environment.url;
    if (id) url += '/' + id;
    return this.http.get(url);
  }
}
