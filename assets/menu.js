const navList = document.querySelector("#categories-list")
const menuContainer = document.querySelector("#menu-container")
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
const categories = new Set();
// getting categories and displaying nav
coffeeMenu.forEach((obj)=>{
  categories.add(obj.category);
})
categories.add("all");
//final categories array
const categoriesArray = [...categories];

// making an array of objects for each category
const categoriesArrayCopy = categoriesArray.slice();
categoriesArrayCopy.forEach(category => {
const itemsInCategory = coffeeMenu.filter(item => item.category === category);
console.log(itemsInCategory);
});
// categoriesArray.
function displayCategories(coffeeMenu){
  // display categories
  categories.forEach((category)=>{
    const navItem = `<li class="category-item">${category}</li>`

    navList.insertAdjacentHTML("afterbegin",navItem);
  })

}
function displayFilteredItems(itemsToDisplay=coffeeMenu) {
  menuContainer.innerHTML = "";

  itemsToDisplay.forEach((item) => {
    const itemCard = `
      <div class="item-card" data-aos="fade-down">
        <img src="${item.image}" alt="" class="item-image" loading="lazy">
        <p class="item-name">${item.name}</p>
        <p class="item-description">${item.description}</p>
      </div>
    `;
    menuContainer.insertAdjacentHTML("beforeend", itemCard);
  });
}

displayFilteredItems(); 
displayCategories();
const navItems = document.querySelectorAll(".category-item");

navItems.forEach((item) => {
  item.addEventListener("click", () => {
    const filteredCategory = item.innerText.toLowerCase();
        item.classList.toggle("active-Category");

    console.log(filteredCategory);
    if (categoriesArray.includes(filteredCategory)) {
      const filteredItems = filteredCategory ==="all"?coffeeMenu: coffeeMenu.filter(item => item.category === filteredCategory);
      displayFilteredItems(filteredItems); 
    }
  });
});
console.log(categoriesArray);