import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Lib } from './model/lib.model';



@Injectable({
  providedIn: 'root'
})
export class MasterService {
apiUrl = 'http://localhost:3000/posts';

constructor(private http: HttpClient) { }

getAll(): Observable<Lib> {
  return this.http.get<Lib>(this.apiUrl)
}

}
