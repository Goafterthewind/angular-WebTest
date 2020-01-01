import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { TopBarComponent } from './top-bar/top-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    TopBarComponent
  ],

  // 配置路由，根据不同的url，跳转不同的页面
  imports: [
    BrowserModule,
    ReactiveFormsModule, // 这个模块的作用是？？
    // 有路由定义组成的数组，path是用来匹配浏览器地址中的url，component是指路由对应的组件
    RouterModule.forRoot([
      { path: '', component: ProductListComponent },
    ])
  ],
  // providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
