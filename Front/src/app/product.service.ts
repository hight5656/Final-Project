import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products = [
    { id: 1, 
      name: 'Apple Pencil Pro', 
       
  
        
  
         
        description: 'Engineered for limitless', 
        price: 129,
        nam:"Apple Pencil",
        image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-40-apple-pencil-202405?wid=800&hei=1000&fmt=png-alpha&.v=1716327768944',
        image2:"https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MUWA3?wid=400&hei=400&fmt=jpeg&qlt=90&.v=1695933856697",
        im3:"https://www.apple.com/uk/apple-pencil/images/overview/1st-gen/apple_pencil_art__fdt7iutg5gey_large.jpg",
        overview:`Apple Pencil (1st generation) opens up ways to express your ideas and creativity. \n
        It has tilt and pressure sensitivity so you can write and draw naturally with varying line weights, subtle shading and a wide range of artistic effects. \n
        It’s perfect for sketching masterpieces, painting watercolours and turning blank pages into beautiful works of art.\n
         Apple Pencil (1st generation) pairs and charges via Lightning.
         Low latency\n
         Feels as natural and responsive as using a pencil on paper.\n`,
       },
    { id: 2, 
        name: 'iPad Pro', 
  
        description: 'Unbelievably thin. Incredibly powerful.',
        price: 929, 
        im3:"https://www.apple.com/uk/ipad-10.9/images/overview/design/fan__e9709q800z6u_large.jpg",
        nam:"Ipad Pro Air",
        image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-40-ipad-pro-202405?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=1713308272816',
        overview:`The new Ultra Retina XDR display introduces groundbreaking tandem OLED technology. \n
        Extreme brightness, incredibly precise contrast and advanced technologies like ProMotion and True Tone give you a jaw-dropping visual experience.\n
         And you can use Reference Mode for colour-accurate workflows.\n
         Introducing M4, the next generation of Apple silicon, delivering outrageous performance in the exceptionally thin and light design of iPad Pro.\n
         An entirely new display engine enables stunning precision, colour and brightness. A powerful GPU with hardware-accelerated ray tracing renders game-changing graphics. \n
         And the Neural Engine in M4 makes iPad Pro an absolute powerhouse for AI.`,
        image2:"https://www.apple.com/v/ipad-air/u/images/overview/closer-look/blue/slide_1A__fg52jvpudo6e_large.jpg" 
      },
    { id: 3,
        name: 'iPad',
        description: 'Touch, draw and type on one magical device.', 
        price: 499, 
        image2:"https://www.apple.com/v/ipad/home/cj/images/overview/select/product-tile/pt_ipad_air__cr381zljqdiu_large.png",
        im3:"https://www.apple.com/v/ipad-air/u/images/overview/chip/chip_top_endframe__bnymo7zyoe5e_large.png",
        overview:`iPad Pro offers two anti-reflective glass options. Standard glass has an industry-leading anti‑reflective coating for viewing comfort and readability.\n
        Nano‑texture glass further minimises glare while delivering outstanding image quality in workspaces with bright light sources, \n
        like sunlight. Nano-texture glass is available in 1TB or 2TB configurations.\n
        iPad Pro includes eSIM technology that enables fast, convenient and secure activation of mobile data plans. \n
        There are a few ways to activate eSIM on your iPad, including transferring from another iPad, joining an existing iPhone data plan, adding a new plan in Settings,\n
         scanning a QR code or using an app from a network provider.* With eSIM you can choose mobile data plans from selected network providers in more than 190 countries and regions around the world. Learn more about setting up eSIM.`,
        image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-40-ipad-air-202405?wid=800&hei=1000&fmt=jpeg&qlt=90&.v=1713308272877' ,
       nam:"iPad 3  ",
      des:"The ultimate iPad experience with the most advanced technology.",
      },
    { id: 4, 
        name: 'Apple Watch',
       
         
          
          overview: `
          Apple Pencil Pro adds even more magical capabilities to help bring your ideas to life. New advanced features make marking up, taking notes and creating a masterpiece more intuitive than ever.\n
          Squeeze. Apple Pencil Pro can sense when you squeeze it and brings up a new palette, so you can quickly switch tools, line weights and colours.\n
          Barrel roll. A new gyroscope allows you to rotate Apple Pencil Pro for precise control of shaped pen and brush tools.\n
          Haptic feedback. A custom haptic engine provides precise feedback you can feel. When you squeeze or double tap, you’ll feel a light pulse confirming the action.\n
          Apple Pencil hover.¹ Preview exactly where your Apple Pencil will touch down on your display and see a virtual shadow of your tool. So you can write, sketch and illustrate with even greater precision.\n
          Double tap. Quickly switch between tools, like a pen and eraser, with a double-tap on Apple Pencil.\n
          And if you misplace Apple Pencil Pro while you’re out and about or at home, you can easily locate it in the Find My app. Apple Pencil Pro attaches, pairs and charges magnetically on the side of your iPad.`,
        
  
      
        description: 'To wear it is to love it.', 
        price: 399,
        nam:"Apple Watch 9",
        image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-40-watch-s9-202309_GEO_GB?wid=800&hei=1000&fmt=jpeg&qlt=90&.v=1693501315417' ,
        image2:'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/watch-compare-series9-202309_GEO_GB?wid=396&hei=468&fmt=jpeg&qlt=90&.v=1693530516839',
        im3:"https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/watch-card-40-compare-202309_GEO_GB?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=1693622133742"
    },
    { id: 5, 
      name: 'Accessories',
     
       
        
        overview: `
        Designed by Apple to complement iPhone 15 Plus, the Silicone Case with MagSafe is a delightful way to protect your iPhone.\n
  
  The silky, soft-touch finish of the silicone exterior feels great in your hand. And on the inside, there’s a soft microfibre lining for even more protection.\n
  
  With built-in magnets that align perfectly with iPhone 15 Plus, this case offers a magical attach experience and faster wireless charging, every time.\n When it’s time to charge, just leave the case on your iPhone and snap on your MagSafe charger, or set it on your Qi-certified charger.\n
  
  Like every Apple-designed case, it undergoes thousands of hours of testing throughout the design and manufacturing process.\n So not only does it look great, it’s built to protect your iPhone from scratches and drops.`,
      
  
    
      description: 'iPhone 15 Silicone', 
      price: 49,
      nam:"Case with MagSafe",
      image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MT4Q3?wid=532&hei=582&fmt=png-alpha&.v=1699565849585' ,
      image2:'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MT0N3_AV6_GEO_GB?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1693502136660',
      im3:"https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MWNE3_FV401?wid=1420&hei=930&fmt=png-alpha&.v=1708479716700"
  }
  ];

  constructor() {
    // Перевіряємо, чи є продукти у Local Storage перед додаванням
    const savedProducts = localStorage.getItem('products');
    if (!savedProducts) {
      // Якщо у Local Storage нічого немає, додаємо продукти
      this.saveProductsToLocalStorage();
    }
  }

  // Метод для збереження продуктів у Local Storage
  private saveProductsToLocalStorage() {
    localStorage.setItem('products', JSON.stringify(this.products));
  }

  // Метод для отримання всіх продуктів з Local Storage
  getProducts() {
    const productsFromStorage = localStorage.getItem('products');
    return productsFromStorage ? JSON.parse(productsFromStorage) : [];
  }

  // Метод для отримання продукту за ID з Local Storage
  getProductById(id: number) {
    const productsFromStorage = this.getProducts();
    return productsFromStorage.find((product: any) => product.id === id);
  }

  // Метод для додавання нового продукту
  addProduct(newProduct: any) {
    let products = this.getProducts();

    // Перевіряємо, чи продукт з таким ID вже існує
    const existingProduct = products.find((product: any) => product.id === newProduct.id);

    if (!existingProduct) {
      // Додаємо новий продукт, якщо його немає
      products.push(newProduct);
      localStorage.setItem('products', JSON.stringify(products));
    } else {
      console.warn(`Продукт з ID ${newProduct.id} вже існує!`);
    }
  }

  // Метод для оновлення продукту
  updateProduct(updatedProduct: any) {
    let products = this.getProducts();
    const index = products.findIndex((product: any) => product.id === updatedProduct.id);

    if (index !== -1) {
      products[index] = updatedProduct;
      localStorage.setItem('products', JSON.stringify(products));
    } else {
      console.warn(`Продукт з ID ${updatedProduct.id} не знайдено!`);
    }
  }

  // Метод для видалення продукту
  deleteProduct(id: number) {
    let products = this.getProducts();
    products = products.filter((product: any) => product.id !== id);
    localStorage.setItem('products', JSON.stringify(products));
  }
}