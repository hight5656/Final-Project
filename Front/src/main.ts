import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { HomeComponent } from './app/home/home.component';
import { ProductComponent } from './app/product/product.component';
import { AdminComponent } from './app/admin/admin.component';
import { PageNotFoundComponent } from './app/page-not-found/page-not-found.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { importProvidersFrom } from '@angular/core';

const routes = [
  { path: '', component: HomeComponent },
  { path: 'product/:id', component: ProductComponent }, // Виправлено: додано параметр id
  { path: 'admin', component: AdminComponent },
  { path: '**', component: PageNotFoundComponent }
];

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    importProvidersFrom(CommonModule, FormsModule)  // Використання importProvidersFrom для модулів
  ]
})
  .catch(err => console.error(err));
