import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})

/**
 * 在服务中存放可共用的逻辑和数据，通过依赖注入方式在不同的组件类中实现代码复用；
 * 通过服务实现不同的类之间的数据共享。
 */
export class CartService {

  // 用来存储加入购物车的商品
  items = [];
  data: any = [];

  constructor(
    private http: HttpClient
  ) { }

  // 加入购物车
  addToCart(product) {
    this.items.push(product);
  }

  // 返回购物车商品
  getItems() {
    return this.items;
  }

  // 清空购物车
  clearCart() {
    this.items = [];
    return this.items;
  }

  // 获取商品类型、价格
  getShippingPrices() {
     this.http.get('/assets/temps/shipping-data.json').subscribe(res => {
       this.data = res;
     });
     return this.data;
  }
}
