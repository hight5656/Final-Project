import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

import { AdminComponent } from "./admin/admin.component";
import { HomeComponent } from "./home/home.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { ProductComponent } from "./product/product.component";
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms'; // Додайте цей імпорт
import { ComentComponent } from './coment/coment.component';
import { LoaderComponent } from './loader/loader.component';
import { SwitcherComponent } from './switcher/switcher.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, AdminComponent, HomeComponent, PageNotFoundComponent, ProductComponent,FormsModule,ComentComponent, LoaderComponent,SwitcherComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'], 

})
export class AppComponent {
  //Екран завантаження
  isLoading: boolean = true; 


  // Отримуємо булеве значення (true/false) від switcher.component
 
  constructor() {

    setTimeout(() => {
      this.isLoading = false;
    }, 3000);
  }
}
