import galaxyS21Image from '../assets/images/image-1.webp';
import macbookProImage from '../assets/images/image-2.webp';
import ipadProImage from '../assets/images/image-3.webp';
import applewatch from '../assets/images/image-4.webp';
import earbuds from '../assets/images/image-5.webp';
// import sonyPlaystation from '../assets/images/image-6.webp';
import smartTv from '../assets/images/image-7.webp';



const products = [
  {
    id: 1,
    title: 'Samsung Galaxy S21 5G',
    description: 'The Samsung Galaxy S21 5G features a 6.2-inch Dynamic AMOLED display...',
    price: 799.00,
    image: galaxyS21Image,
    category: 'Smartphones',
  },
  {
    id: 2,
    title: 'Apple MacBook Pro 14-inch',
    description: 'The new Apple MacBook Pro features the M1 Pro chip...',
    price: 1999.00,
    image: macbookProImage,
    category: 'Laptops',
  },
  {
    id: 3,
    title: 'Apple iPad Pro 12.9-inch',
    description: 'The Apple iPad Pro 12.9-inch offers a breathtaking Liquid Retina XDR display, powered by the M1 chip for ultimate performance. It supports the Apple Pencil (2nd generation) and the Magic Keyboard, making it perfect for creative professionals and power users.',
    price: 1099.00,
    image: ipadProImage,
    category: 'Tablets',
  },
  {
    id: 4,
    title: 'Apple Watch Series 7',
    description: 'The Apple Watch Series 7 features a larger, always-on Retina display, making it easier to see and use. It’s more durable with crack-resistant front crystal, and it offers advanced health tracking, including blood oxygen monitoring and ECG. Stay connected with built-in cellular.',
    price: 399.00,
    image: applewatch,
    category: 'Wearables',
  },
  {
    id: 5,
    title: 'Sony WF-1000XM4 Wireless Earbuds',
    description: 'The Sony WF-1000XM4 wireless earbuds offer industry-leading noise cancellation, thanks to the new integrated V1 processor. Enjoy superior sound quality with LDAC support, and experience up to 8 hours of playback on a single charge. The compact case provides additional 16 hours of battery life.',
    price: 279.99,
    image: earbuds,
    category: 'Audio',
  },
  // {
  //   id: 6,
  //   title: 'OnePlus Nord CE 2 Lite 5G',
  //   description: 'The Sony PlayStation 5 delivers an unparalleled gaming experience with its ultra-high-speed SSD, 8K output, and ray tracing capabilities. Enjoy smooth gameplay with up to 120fps on supported games. The console comes with a custom AMD Zen 2 processor and RDNA 2 GPU.',
  //   price: 499.99,
  //   image: sonyPlaystation,
  //   category: 'Gaming',
  // },
  {
    id: 7,
    title: 'LG OLED CX 55-inch Smart TV',
    description: 'The LG OLED CX Series features a stunning 4K Ultra HD display with perfect blacks and intense colors. With AI-powered image processing, every scene is optimized for a cinematic experience.',
    price: 1499.99,
    image: smartTv,
    category: 'TVs',
        },
  // More products...
];

export default products;






// const products = [
//     {
//       id: 1,
//       title: 'Samsung Galaxy S21 5G',
//       description: 'The Samsung Galaxy S21 5G features a 6.2-inch Dynamic AMOLED display with a 120Hz refresh rate. Powered by the Exynos 2100 processor and equipped with 8GB of RAM, it ensures smooth performance. Capture stunning photos with its 64MP triple-camera system. The 4000mAh battery supports fast charging and wireless charging.',
//       price: 799.99,
//       // image: '../src/images/image-1.webp',
//       image: () => require('../src/images/image-1.webp').default,
//       // image: 'https://www.ubuy.co.in/product/48LF1F71A-samsung-galaxy-s21-5g-128-256gb-sm-g991u1-us-model-unlocked-cell-phones-like-new',
//       category: 'Smartphones',
//     },
//     {
//       id: 2,
//       title: 'Apple MacBook Pro 14-inch',
//       description: 'The new Apple MacBook Pro features the M1 Pro chip, delivering unparalleled performance and efficiency. It has a stunning 14-inch Liquid Retina XDR display, 16GB of unified memory, and a 512GB SSD for fast storage. Ideal for professionals who need power on the go.',
//       price: 1999.00,
//       image: 'https://example.com/macbook-pro.jpg',
//       category: 'Laptops',
//     },
    // {
    //   id: 3,
    //   title: 'Apple iPad Pro 12.9-inch',
    //   description: 'The Apple iPad Pro 12.9-inch offers a breathtaking Liquid Retina XDR display, powered by the M1 chip for ultimate performance. It supports the Apple Pencil (2nd generation) and the Magic Keyboard, making it perfect for creative professionals and power users.',
    //   price: 1099.00,
    //   image: 'https://example.com/ipad-pro.jpg',
    //   category: 'Tablets',
    // },
//     {
//       id: 4,
//       title: 'Apple Watch Series 7',
//       description: 'The Apple Watch Series 7 features a larger, always-on Retina display, making it easier to see and use. It’s more durable with crack-resistant front crystal, and it offers advanced health tracking, including blood oxygen monitoring and ECG. Stay connected with built-in cellular.',
//       price: 399.00,
//       image: 'https://example.com/apple-watch-7.jpg',
//       category: 'Wearables',
//     },
//     {
//       id: 5,
//       title: 'Sony WF-1000XM4 Wireless Earbuds',
//       description: 'The Sony WF-1000XM4 wireless earbuds offer industry-leading noise cancellation, thanks to the new integrated V1 processor. Enjoy superior sound quality with LDAC support, and experience up to 8 hours of playback on a single charge. The compact case provides additional 16 hours of battery life.',
//       price: 279.99,
//       image: 'https://example.com/sony-wf-1000xm4.jpg',
//       category: 'Audio',
//     },
//     {
//       id: 6,
//       title: 'Sony PlayStation 5',
//       description: 'The Sony PlayStation 5 delivers an unparalleled gaming experience with its ultra-high-speed SSD, 8K output, and ray tracing capabilities. Enjoy smooth gameplay with up to 120fps on supported games. The console comes with a custom AMD Zen 2 processor and RDNA 2 GPU.',
      // price: 499.99,
//       image: 'https://example.com/ps5.jpg',
//       category: 'Gaming',
//     },
//     {
//       id: 7,
//       title: 'LG OLED CX 55-inch Smart TV',
//       description: 'The LG OLED CX Series features a stunning 4K Ultra HD display with perfect blacks and intense colors. With AI-powered image processing, every scene is optimized for a cinematic experience.',
//       price: 1499.99,
//       image: 'https://example.com/lg-oled-cx.jpg',
//       category: 'TVs',
//     },
//   ];
  
//   export default products;
  