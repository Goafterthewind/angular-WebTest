import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent implements OnInit {

  /**
   * @Input装饰器
   * 说明这个product属性的值是从组件的父组件（这里是商品列表组件）中传入的。、
   */
  @Input() product;

  /**
   * @Output装饰器
   * EventEmitter():事件发生器
   * 事件发生器的典型应用就是父组件监听子组件的事件，
   * 子组件（使用@Output）暴露一个EventEmitter属性，当事件发生时，子组件利用该属性emits（向上弹射）事件。
   * 父组件绑定到这个事件属性，并在事件发生时做出回应。
   */
  @Output() notify = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
