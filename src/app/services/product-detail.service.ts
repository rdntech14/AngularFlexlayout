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
      "name": "Special Celebration Cake",
      "image": "k_1001.jpeg",
      "price": 50
    },
    {
      "id": 1002,
      "name": "Blueberry Cake",
      "image": "k_1002.jpeg",
      "price": 150
    },
    {
      "id": 1003,
      "name": "Floating Hearts Cake",
      "image": "k_1003.jpeg",
      "price": 200
    },
    {
      "id": 1004,
      "name": "Rich Fruit Cake",
      "image": "k_1004.jpeg",
      "price": 250
    },
    {
      "id": 1005,
      "name": "Tiramisu Cake",
      "image": "k_1005.jpeg",
      "price": 300
    },
    {
      "id": 1001,
      "name": "Special Celebration Cake",
      "image": "k_1006.jpeg",
      "price": 50
    },
    {
      "id": 1002,
      "name": "Blueberry Cake",
      "image": "k_1007.jpeg",
      "price": 150
    },
    {
      "id": 1003,
      "name": "Floating Hearts Cake",
      "image": "k_1008.jpeg",
      "price": 200
    },
    {
      "id": 1004,
      "name": "Rich Fruit Cake",
      "image": "k_1009.jpeg",
      "price": 250
    },
    {
      "id": 1005,
      "name": "Tiramisu Cake",
      "image": "k_1010.jpeg",
      "price": 300
    },
    {
      "id": 1001,
      "name": "Special Celebration Cake",
      "image": "k_1011.jpeg",
      "price": 50
    },
    {
      "id": 1002,
      "name": "Blueberry Cake",
      "image": "k_1012.jpeg",
      "price": 150
    },
    {
      "id": 1003,
      "name": "Floating Hearts Cake",
      "image": "k_1013.jpeg",
      "price": 200
    },
    {
      "id": 1004,
      "name": "Rich Fruit Cake",
      "image": "k_1014.jpeg",
      "price": 250
    },
    {
      "id": 1005,
      "name": "Tiramisu Cake",
      "image": "k_1015.jpeg",
      "price": 300
    }
  ]
};
