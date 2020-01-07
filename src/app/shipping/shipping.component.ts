import { Component, OnInit } from '@angular/core';

import { CartService } from '../cart.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {

  shippingCosts;

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    // 不使用subscribe订阅，获取到的是一个流，通过异步管道（async）在模板文件中自动订阅
    // this.shippingCosts = this.cartService.getShippingPrices();

    // 使用subscribe订阅
    this.cartService.getShippingPrices().subscribe(res => {
      this.shippingCosts = res;
    });
  }

}
