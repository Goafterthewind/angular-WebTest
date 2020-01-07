import { Component, OnInit } from '@angular/core';
import {  CartService } from '../cart.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items: any;

  checkOutForm: FormGroup;

  constructor(
    private cartService: CartService,
    private fb: FormBuilder
  ) {
    this.items = this.cartService.getItems();
    console.log(this.items);
  }

  ngOnInit() {
    const data = this.cartService.getShippingPrices();
    console.log(data);

    this.checkOutForm = this.fb.group({
      name: '',
      address: ''
    });
  }

  onSubmit(customerData) {
    // Process checkout data here

    // customerData是一个对象，对象的值就是表单中各表单项的值
    console.log( customerData);
    this.items = this.cartService.clearCart(); // 清空购物车
    console.log(this.items);
    this.checkOutForm.reset(); // 重置表单
  }

}
