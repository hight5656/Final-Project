import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';
import { CommonModule,NgFor,NgIf,NgClass } from '@angular/common';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http'; // Імпорт HttpClientModule


@Component({
  selector: 'app-product',

  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    NgFor,
    NgIf,
    NgClass,
    HttpClientModule // Використовуємо актуальний модуль
  ]
})
  
export class ProductComponent {

  productNames: string[] = [];
  basketNumberProduct: number = 0;
  qt:number=1
  shoppingCart: any[] = [];
  isFormVisible: boolean = false; 
  productId!: number;
  product: any;
  dots : boolean[]=[false,false,false,false,false,false,false,false]
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private http: HttpClient
  ) {}
  isOverviewVisible=false;
  product2 = {
    name: 'Product Name',
    price: 100,
    image2: 'image-url',
    money:"",
    nam: 'Product Description'
    
  };
  ngOnInit(): void {
    const productId = Number(this.route.snapshot.paramMap.get('id'));

   
  
    // Отримання продукту за ID
    this.product = this.productService.getProductById(productId);
  
    if (this.product) {
      console.log('Product found:', this.product);
    } else {
      console.log('Product not found');
    }
    this.upDatebasket()
  }
  onClick(index:number):void{
    this.dots=[false,false,false,false,false,false,false,false]
    this.dots[index]=!this.dots[index]
    
  }
  changeIcon():void{
    console.log("{helkoo")
  }
  
  upDatebasket(){
    if(this.getLength()>0){
      this.isBasketMumber=true
    };
  }
  toggleOverview() {
    this.isOverviewVisible = !this.isOverviewVisible;
    console.log('Overview state:', this.isOverviewVisible ? 'visible' : 'hidden');
  }
  
  closeForm() {
    this.isFormVisible = false;
    this.clearBasket() // Закриття форми при натисканні кнопки закриття
  }
  onOpenForm(){
    this.isFormVisible = true; 
  }
 
 
  isBasketMumber=false
  inCrease(index: number) {
    this.shoppingCart[index].quantity++;
    this.updateCart();
  }
  updateCart() {
    localStorage.setItem('shoppingCart', JSON.stringify(this.shoppingCart));
  }
  getLength() {
    const value = localStorage.getItem('shoppingCart');
    
    if (value) {
        try {
            const parsedValue = JSON.parse(value); // Parse the JSON string
            if (Array.isArray(parsedValue)) {
                return parsedValue.length; // Return the length of the array
            }
        } catch (e) {
            console.error('Failed to parse JSON:', e); // Handle JSON parsing errors
        }
    }
    
    return 0; // Return 0 if there's no valid array
}

  deCrease(index: number) {
    if (this.shoppingCart[index].quantity > 1) {
      this.shoppingCart[index].quantity--;
      this.updateCart();
    }
  }
  onCreseProduct(){
    this.qt++
  }
  onDcrProduct(){
    if (this.qt > 0) {
      this.qt--;
    }
  }
  clearBasket(){
    this.qt=0;
  }
    addBasket(){

      const cartItem = {
        name: this.product.name,
        price: this.product.price,
        image: this.product.image2,
        money: this.curensy,
        quantity: this.qt
      };
  
      // Отримати поточну корзину з localStorage
      let cart = JSON.parse(localStorage.getItem('shoppingCart') || '[]');
  
      // Перевірити, чи цей товар вже існує в корзині
      let existingItem = cart.find((item: any) => item.name === cartItem.name);
  
      if (existingItem) {
        // Якщо товар вже існує, збільшуємо його кількість
        existingItem.quantity += cartItem.quantity;
      } else {
        // Якщо товар новий, додаємо його в корзину
         this.basketNumberProduct+=1;
        cart.push(cartItem);
      }
  
      // Оновлюємо localStorage
      localStorage.setItem('shoppingCart', JSON.stringify(cart));
  
      console.log('Product added to basket:', cartItem);
      
      this.isBasketMumber=true
      this.clearBasket()
      this.closeForm();
      return
    }
   
   curensy :string=" "
  onChange(value:string){



 this.curensy=value

  }
  isBasketList=false
  opBasketList(){
    this.isBasketList=true;
    this.loadCart();
   

  }
  closeAlist(){
    this.isBasketList=false
  }
  loadCart() {
    // Завантаження даних з localStorage
    const cart = JSON.parse(localStorage.getItem('shoppingCart') || '[]');
    this.shoppingCart = cart;

    // Витягуємо назви продуктів
    this.productNames = this.shoppingCart.map(item => item.name);
  }

  getTotalItems() {
    return this.shoppingCart.reduce((total, item) => total + item.quantity, 0);
  }
  getQuantity(productName: string) {
    const item = this.shoppingCart.find((item) => item.name === productName);
    return item ? item.quantity : 0; // Повертаємо кількість, або 0, якщо товар не знайдено
  }
  
  getTotalPrice() {
    return this.shoppingCart.reduce((total, item) => total + (item.price * item.quantity), 0);
  }
 
  removeItem(index: number) {
  
    this.shoppingCart.splice(index, 1);
  
    this.updateCart();
    if(this.shoppingCart.length===0){
      this.onRemoveAll();
     this.isBasketMumber=false;
    
    }
  }
  onRemoveAll() {
    console.log("Очистка кошика");
    // Очищуємо тільки дані про кошик в localStorage
    localStorage.setItem('shoppingCart', JSON.stringify([])); // Зберігаємо порожній масив
    this.shoppingCart = []; // Очищаємо локальний масив кошика
    this.isBasketMumber = false;
    this.basketNumberProduct = 0;
    this.closeAlist(); // Закриваємо список кошика, якщо потрібно
}

  onCheckout(): void {
    const totalPrice = this.getTotalPrice();
    const currency =this.curensy; // Ви можете змінити валюту, якщо потрібно
    const orderDetails = {
      items: this.shoppingCart,
      totalPrice: totalPrice,
      currency: this.curensy,
       // Замініть на фактичний ID користувача, якщо потрібно
      userFirstName: 'Kateryna', // Отримайте з профілю користувача
      userLastName: 'Kozhokar', // Отримайте з профілю користувача
    };

    // Відправка даних на сервер
    this.http.post('http://localhost:3100/checkout', orderDetails).subscribe(
      response => {
        console.log('Order sent successfully:', response);
        this.onRemoveAll(); // Очистити корзину після успішного замовлення
      },
      error => {
        console.error('Error sending order:', error);
      }
    )
  }

}


