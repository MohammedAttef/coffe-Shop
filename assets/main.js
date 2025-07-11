
const bestSellingItemsContainer =document.querySelector("#best-selling-items-container");


const coffeeMenu = [
  {
    name: "Caramel Macchiato",
    price: 6.5,
    description: "Espresso with vanilla syrup, milk, caramel drizzle",
    bestseller: true,
    category: "hot",
    image: "/assets/imgs/caramel-macciato.png"
  },
  {
    name: "Caffe Latte",
    price: 5.0,
    description: "Espresso with steamed milk, light layer of foam",
    bestseller: false,
    category: "hot",
    image: "/assets/imgs/caffe-latte.png"
  },
  {
    name: "Caffe Mocha",
    price: 6.75,
    description: "Espresso with mocha sauce, steamed milk, whipped cream",
    bestseller: true,
    category: "hot",
    image: "/assets/imgs/caffe-mocha.png"
  },
  {
    name: "Cappuccino",
    price: 5.5,
    description: "Espresso with steamed milk, thick layer of foam",
    bestseller: false,
    category: "hot",
    image: "/assets/imgs/cappuchino.png"
  },
  {
    name: "Espresso",
    price: 5.25,
    description: "Strong, concentrated coffee brewed under pressure",
    bestseller: false,
    category: "hot",
    image: "/assets/imgs/espresso.png"
  },
  
  {
    name: "Flat White",
    price: 6.0,
    description: "Espresso with velvety steamed milk",
    bestseller: false,
    category: "hot",
    image: "/assets/imgs/flat-white.png"
  },
  {
    name: "Iced Caffe Latte",
    price: 5.75,
    description: "Espresso with cold milk, ice",
    bestseller: false,
    category: "iced",
    image: "/assets/imgs/iced-caffe-latte.png"
  },
  {
    name: "Iced Caffe Mocha",
    price: 6.5,
    description: "Espresso with mocha sauce, cold milk, ice, whipped cream",
    bestseller: false,
    category: "iced",
    image: "/assets/imgs/iced-caffe-mocha.png"
  },
  {
    name: "Iced Caramel Macchiato",
    price: 6.75,
    description: "Espresso with vanilla syrup, cold milk, caramel drizzle, ice",
    bestseller: true,
    category: "iced",
    image: "/assets/imgs/iced-caramel-machiatto.png"
  },
  {
    name: "Hazelnut Cold Brew",
    price: 6.25,
    description: "Cold brew coffee with hazelnut syrup and ice",
    bestseller: false,
    category: "seasonal",
    image: "/assets/imgs/espresso-machiatto.png"
  }
];
 
function displayBestSellers(coffeeMenu) {

  coffeeMenu.forEach((obj) => {
    if (obj.bestseller === true) {
      const card = `
        <div class="item-card">
          <div class="item-details">
            <p class="item-name">${obj.name}</p>
            <p class="item-price">${obj.price}$</p>
            <button class="order-button">order now</button>
          </div>
          <img src="${obj.image}" alt="" class="item-image" loading="lazy" data-aos="fade-left">
        </div>
      `;
      
      bestSellingItemsContainer.insertAdjacentHTML("beforeend", card);
    }
  });
}

displayBestSellers(coffeeMenu);
function displayCategoriesAndItems(coffeeMenu){
  const categories = new Set("");
  coffeeMenu.forEach((obj)=>{
    categories.add(obj.category);
  })
  console.log([...categories]);

}
displayCategoriesAndItems(coffeeMenu);