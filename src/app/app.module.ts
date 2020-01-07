import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    TopBarComponent,
    ProductAlertsComponent,
    ProductDetailsComponent,
    CartComponent
  ],

  // 配置路由，根据不同的url，跳转不同的页面
  imports: [
    BrowserModule,
    HttpClientModule, // 为应用启用HTTPClient服务，用来获取数据词能够与外部api和资源交互。
    ReactiveFormsModule, // 这个模块的作用是？？
    // 有路由定义组成的数组，path是用来匹配浏览器地址中的url，component是指路由对应的组件
    RouterModule.forRoot([
      { path: '', component: ProductListComponent },
      { path: 'products/:productId', component: ProductDetailsComponent },
      { path: 'cart', component: CartComponent}
    ])
  ],
  // providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
