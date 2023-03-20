import { Component } from '@angular/core';
import { Iproduct } from './interfaces/iproduct';
import { Product01Service } from './service/product-01.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'stationary_mini_project';

  products:Iproduct[];

  constructor(private product01Service: Product01Service) {
    this.products = product01Service.products;
  }
}
