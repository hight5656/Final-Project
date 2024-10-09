import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class AdminComponent implements  OnInit  {
  constructor(private router: Router) {}
 
  [x: string]: any;
  isLoading = true;
  isFormVisible: boolean = false; 
  password = '1234';
  shofCARD = true;
  shofPanel = false;
  loginData = { username: '', password: '' };
  isAuthenticated = false;
  loginError = false;
  private correctUsername = 'admin';
  private correctPassword = '1234';
  isAdminForm=true;
  ngOnInit() {
    this.loadProducts();
    // setTimeout(() => {
    //   this.isLoading = false;
    // }, 3000);
  
  }
  

  login() {
    if (this.loginData.username === this.correctUsername && this.loginData.password === this.correctPassword) {
      this.isAuthenticated = true;
      this.loginError = false;
    } else {
      this.isAdminForm=false;
      this.loginError = true;
    }
  }
  newProduct = {
    name: '',
    description: '',
    price: 0,
    image: '',
    image2: '',
    overview: '',
  };

  products: any[] = [];
  editingProductId: number | null = null;

 

  check(event: any) {
    if (event.target.value === this.password) {
      alert('Success');
      this.shofCARD = false;
      this.shofPanel = true;
    } else {
      alert('Invalid password');
      event.target.value = '';
    }
  }

  addProduct() {
    if (this.newProduct.name && this.newProduct.price && this.newProduct.image && this.newProduct.image2  && this.newProduct.overview ) {
      if (this.editingProductId) {
        // Edit existing product
        const productIndex = this.products.findIndex(p => p.id === this.editingProductId);
        if (productIndex !== -1) {
          this.products[productIndex] = { ...this.newProduct, id: this.editingProductId };
        }
        this.editingProductId = null;
      } else {
        // Add new product
        const product = {
          id: Date.now(),
          ...this.newProduct
        };
        this.products.push(product);
      }

      this.saveProducts();

      // Clear form
      this.newProduct = {
        name: '',
        description: '',
        price: 0,
        image: '',
        image2:'',
        overview: '',
      };
    } else {
      alert('Please fill all fields.');
    }
  }

  editProduct(id: number) {
    this.onClick();
    const product = this.products.find(p => p.id === id);
    if (product) {
      this.newProduct = { ...product };
      this.editingProductId = id;
    }
  }

  deleteProduct(id: number) {
    // Filter out the product with the specified ID
    
    this.products = this.products.filter(p => p.id !== id);
    this.saveProducts();
  }

  saveProducts() {
    // Save the updated list of products to localStorage
    localStorage.setItem('products', JSON.stringify(this.products));
    console.log(this.products)
  }

  loadProducts() {
    // Load products from localStorage
    const products = localStorage.getItem('products');
    if (products) {
      this.products = JSON.parse(products);
    }
  }
  onClick() {
    this.isFormVisible = true; // Відображення форми при натисканні кнопки
  }
  closeForm() {
    this.isFormVisible = false; // Закриття форми при натисканні кнопки закриття
  }
  navigateToPageHome() {
    this.router.navigate(['/']);
  }
  onClikHome(){
      this.navigateToPageHome()
  }
}
