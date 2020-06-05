import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CakeModel } from '../models/cakeModel';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailService {

  constructor(private http: HttpClient) { }

  getCakes(): CakeModel {
    // return this.http.get<CakeModel>(this.popularMovieURL)
    return (cakeResponse) as CakeModel;
  }
}
// tslint:disable
const cakeResponse = {
  "cakes": [
    {
      "id": 1001,
      "name": "name_1001",
      "image": "i_1001.jpeg",
      "price": 50
    },
    {
      "id": 1002,
      "name": "name_1002",
      "image": "i_1002.jpeg",
      "price": 150
    },
    {
      "id": 1003,
      "name": "name_1003",
      "image": "i_1003.jpeg",
      "price": 200
    },
    {
      "id": 1004,
      "name": "name_1004",
      "image": "i_1004.jpeg",
      "price": 250
    },
    {
      "id": 1005,
      "name": "name_1005",
      "image": "i_1005.jpeg",
      "price": 300
    }
  ]
};
