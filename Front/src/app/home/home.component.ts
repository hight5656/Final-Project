import { Component, AfterViewInit, ElementRef, QueryList, ViewChildren, OnDestroy, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { CommonModule, NgClass, NgFor, NgIf } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'; // Додайте цей імпорт
import { ProductService } from '../product.service';
import { ComentComponent } from '../coment/coment.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SwitcherComponent } from '../switcher/switcher.component';
import { LoaderComponent } from '../loader/loader.component';


interface CartItem {
  name: string;
  price: number;
  quantity: number;
  money: string;
  image:string;
}




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule,
     RouterModule,
     ComentComponent,
     NgFor,
    NgIf,
    NgClass,
    HttpClientModule ,SwitcherComponent,LoaderComponent], // Додайте FormsModule сюди

  animations: [
    trigger('fadeIn', [
      state('hidden', style({
        opacity: 0,
        transform: 'translateY(100px)'
      })),
      state('visible', style({
        opacity: 1,
        transform: 'translateY(0)'
      })),
      transition('hidden => visible', [
        animate('1s')
      ]),
      transition('visible => hidden', [
        animate('1s')
      ]),
    ])
  ]
})



export class HomeComponent implements AfterViewInit, OnDestroy, OnInit {
  [x: string]: any;
  isLoading = true;
  searchText: string = ''; // Текст фільтра
  filteredProducts: any[] = [];
  products: any[] = [];
  isShowComent =false;
  isCloseComentForm=true;
  isCloseComentFormX=false
  // slides = [
  //   { title: 'Apple TV', content: 'New Apple Originals streaming every month...', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzTplKT-iUGYXMKrquNTINRktyU2-qJDh2Lw&s' },
  //   { sub: 'Apple TV', title: 'Lady in the Lake', content: 'The lives of two women converge...', image: '...' },
  //   { sub: 'Apple TV', title: 'SLOW HORSES', content: '2024 nominee for 9 Emmy® Awards...', image: '...' }
  // ];
  exchangeRates: { [key: string]: number } = {
    "$": 1, 
    "£": 0.75,
    "€": 0.85 
  };
  cartItems: CartItem[] = [];
  shoppingCart: CartItem[] = [];
  currentSlide = 0;
  url: string = 'assets/videos/case.mp4';
  video: HTMLVideoElement | null = null;
  isPlaying: boolean = false;
  backgroundColor: string = '#FFFFFF';
  videoBoxShadow: string = '0px 0px 10px 0px rgba(0, 0, 0, 0.5)';
  intervalId: any;
  curensy: string = "$";
  isBasketMumber: boolean = false;
  isBasketList: boolean = false;
  @ViewChildren('section') sections!: QueryList<ElementRef>;
  observer!: IntersectionObserver;

  constructor(
    private elRef: ElementRef,
    private productService: ProductService, 
    private router: Router,
    private http: HttpClient
  ) {}
  isDarkMode = false;

  onModeToggle(isDarkMode: boolean) {
    this.isDarkMode = isDarkMode;
  }
  ngOnInit(): void {
    this.upDatebasket();
    
    // Отримуємо продукти з сервісу
    this.products = this.productService.getProducts();

    // Отримуємо продукти з Local Storage
    const localStorageData = localStorage.getItem('products');
    if (localStorageData) {
        const parsedData = JSON.parse(localStorageData);
        // Фільтруємо продукти, щоб уникнути дублювання
        this.products = this.products.filter(product => 
            !parsedData.some((localProduct: { id: any; }) => localProduct.id === product.id)
        ).concat(parsedData);
    }

    // Ініціалізуємо фільтровані продукти
    this.filteredProducts = this.products;

    console.log('Products:', this.products); // Перевіряємо отримані дані

    const storedCart = localStorage.getItem('shoppingCart');
    if (storedCart) {
        this.shoppingCart = JSON.parse(storedCart);
    }
    setTimeout(() => {
      this.isLoading = false;

    }, 3000);
}

  
  

  selectProduct(id: number): void {
    this.router.navigate(['/product', id]);
  }

  ngAfterViewInit() {
    this.setupVideo();
    this.setupIntersectionObserver();
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }

  setupVideo() {
    this.video = this.elRef.nativeElement.querySelector('video');
    this.intervalId = setInterval(() => {
      this.onTimeUpdate();
    }, 1000);
  }

  setupIntersectionObserver() {
    this.observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const section = entry.target as HTMLElement;
        if (entry.isIntersecting) {
          section.classList.add('visible');
        } else {
          section.classList.remove('visible');
        }
      });
    }, { threshold: 0.5 });

    this.sections.forEach(sectionRef => this.observer.observe(sectionRef.nativeElement));
  }

  onClick() {
    if (this.video) {
      if (this.isPlaying) {
        this.video.pause();
      } else {
        this.video.play();
      }
      this.isPlaying = !this.isPlaying;
    } else {
      console.error('Video element not found');
    }
  }

  onLoadedMetadata() {
    this.setupVideo();
  }

  onTimeUpdate() {
    if (this.video) {
      const videoElement = this.video;
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');

      canvas.width = videoElement.videoWidth;
      canvas.height = videoElement.videoHeight;

      context?.drawImage(videoElement, 0, 0, canvas.width, canvas.height);

      const centerX = Math.floor(canvas.width / 2);
      const centerY = Math.floor(canvas.height / 2);

      const frame = context?.getImageData(centerX, centerY, 1, 1).data;
      if (frame) {
        this.backgroundColor = `rgb(${frame[0]}, ${frame[1]}, ${frame[2]})`;
        this.videoBoxShadow = `0px 0px 20px 20px rgba(${frame[0]}, ${frame[1]}, ${frame[2]}, 0.8)`;
      }
    }
  }

  onChange(value:string){



 this.curensy=value

  }
  convertPrice(price: number): number {
    const rate = this.exchangeRates[this.curensy]; // Отримуємо курс для обраної валюти
    return price * rate;  // Конвертуємо ціну
  }
  
  onCurensyChange(valueC:string):void{
    console.log(`change valu for ${valueC}`)
  }
  changeSlide(index: number) {
    this.currentSlide = index;
  }

  filterProducts() {
    if (!this.searchText) {
      this.filteredProducts = this.products;
    } else {
      this.filteredProducts = this.products.filter(product =>
        product.name.toLowerCase().includes(this.searchText.toLowerCase()) ||
        product.description.toLowerCase().includes(this.searchText.toLowerCase())
      );
    }
    console.log('Filtered Products:', this.filteredProducts); // Перевірка роботи фільтрації
  }
 
  closeForm(): void {
    this.isBasketList = false;
    console.log('Basket list closed');
  }

  // Метод для закриття списку кошика (можливо, інший функціонал, залежно від контексту)
  closeAlist(): void {
    this.isBasketList = false;
    console.log('Basket list closed via icon');
  }

  // Метод для видалення всіх товарів із кошика
  onRemoveAll(): void {
    this.shoppingCart = [];
    this.isBasketMumber=false;
    
    this.updateCart();
    this.closeAlist();
    console.log('All items removed from the cart');
  }

  // Метод для видалення окремого товару з кошика за індексом
  removeItem(index: number): void {
    // Перевіряємо, чи індекс в межах допустимого діапазону
    if (index > -1 && index < this.shoppingCart.length) {
        // Видаляємо елемент за індексом
        this.shoppingCart.splice(index, 1);
        this.updateCart();
        console.log(`Item at index ${index} removed`);

        // Перевіряємо, чи кошик порожній після видалення елемента
        if (this.shoppingCart.length === 0) {
            this.onRemoveAll();
            this.isBasketMumber = false;
        }
    } 
}


  // Метод для зменшення кількості товару
  deCrease(index: number): void {
    if (this.shoppingCart[index].quantity > 1) {
      this.shoppingCart[index].quantity--;
      this.updateCart();
      console.log(`Quantity of item at index ${index} decreased`);
    }
  }

  // Метод для збільшення кількості товару
  inCrease(index: number): void {
    this.shoppingCart[index].quantity++;
    this.updateCart();
    console.log(`Quantity of item at index ${index} increased`);
  }

  // Метод для оновлення кошика у Local Storage
  updateCart(): void {
    localStorage.setItem('shoppingCart', JSON.stringify(this.shoppingCart));
    console.log('Cart updated in local storage');
  }

  // Метод для отримання загальної кількості товарів
  getTotalItems(): number {
    return this.shoppingCart.reduce((total, item) => total + item.quantity, 0);
  }

  // Метод для отримання загальної вартості товарів
  getTotalPrice(): number {
    return this.shoppingCart.reduce((total, item) => total + (item.price * item.quantity), 0);
  }


  opBasketList(): void {
    if(this.shoppingCart.length>0){
      this.isBasketList = true;
    }else if (this.shoppingCart.length===0){
      alert('Add to basket product to view list')
    } 
    
  }
  upDatebasket(){
    if(this.getLength()>0){
      this.isBasketMumber=true
    }
  }
  getLength(): number {
    const value = localStorage.getItem('shoppingCart');
    
    if (!value) {
        return 0; 
    }

    try {
        const parsedValue = JSON.parse(value); 

        if (Array.isArray(parsedValue)) {
            return parsedValue.length; 
        } else {
            console.error('Parsed value is not an array:', parsedValue);
            return 0; 
        }
    } catch (e) {
        console.error('Failed to parse JSON:', e); 
        return 0; 
    }
}
navigateToPageAdmin() {
  this.router.navigate(['/admin']);
}
onClickAdmin(){
 this.navigateToPageAdmin()
}
onClickOpenForm(){
    this.isShowComent=true;
    this.isCloseComentForm=false
    this.isCloseComentFormX=true
}
onClickForm(){
  this.isShowComent=false;
  this.isCloseComentForm=true;
  this.isCloseComentFormX=false;
}
onCheckout(): void {
  const orderData = {
    items: this.shoppingCart.map(item => ({
      name: item.name,
      price: item.price,
      quantity: item.quantity
    })),
    totalPrice: this.getTotalPrice(),
    currency: this.curensy
  };

  // Відправка даних на бекенд
  this.http.post('http://localhost:3100/checkout', orderData).subscribe(
    (response: any) => {
      console.log('Order sent to server:', response);
      alert('Ваше замовлення успішно надіслано!');
      this.onRemoveAll();
    },
    (error) => {
      console.error('Error sending order to server:', error);
      alert('Помилка при надсиланні замовлення.');
    }
  );
}
}