import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DogService {

  constructor(private httpClient: HttpClient) { }

  getRandomImage(): Observable<any> {
    return this.httpClient.get<any>(`https://dog.ceo/api/breeds/image/random`);
  }

}
