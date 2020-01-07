import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { products } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product;

  /**
   * @param route : Provides access to information about a route associated with a component that is loaded in an outlet.
   * Use to traverse the `RouterState` tree and extract information from nodes.
   * (提供对与加载到出口中的组件关联的路由的信息的访问。用于遍历“RouterState”树并从节点提取信息。)
   */
  constructor(
    private route: ActivatedRoute,
    private cartService: CartService) {}

  ngOnInit() {
    /**
     * paramMap:
     * 包含特定于路由的必需参数和可选参数的映射的可观察对象。映射支持从同一参数中检索单个和多个值。
     */
    console.log(this.route);
    this.route.paramMap.subscribe(params => {
      this.product = products[params.get('productId')];
    });
  }

  /**
   * 这个AddToCart方法和服务中心的addToCart方法一毛钱关系也没有；
   * 不知道为什么用两个同名的方法。。傻兮兮的。
   */
  AddToCart() {
    window.alert('Your product has been added to the cart!');
    this.cartService.addToCart(this.product);
  }

}
