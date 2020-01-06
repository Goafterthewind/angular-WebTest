import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { products } from '../products';

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
  constructor(private route: ActivatedRoute) {}

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

}
