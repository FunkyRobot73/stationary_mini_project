import { Injectable } from '@angular/core';
import { Iproduct } from '../interfaces/iproduct';
import { productsArray } from '../data';

@Injectable({
  providedIn: 'root'
})
export class Product01Service {

  products:Iproduct[] = productsArray;

  constructor() { }
}
