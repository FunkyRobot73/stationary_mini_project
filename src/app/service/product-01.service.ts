import { Injectable } from '@angular/core';
import { Iproduct } from '../interfaces/iproduct';

@Injectable({
  providedIn: 'root'
})
export class Product01Service {

  products:Iproduct[] = [
    {id:1, type:"pencil"},
    {id:2, type:"pen"},
    {id:3, type:"marker"},
    {id:4, type:"crayon"}
    ]

  constructor() { }
}
