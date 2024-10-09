import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // Додаємо HttpClientModule

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule // Додаємо HttpClientModule до імпортів
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
