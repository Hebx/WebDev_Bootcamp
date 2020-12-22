const randomMeals = {
  appetizers: [
    'Chicken Wings',
    'French Fries',
    'Guacamole',
    'Bruschetta',
    'Garlic Bread',
    'Stuffed Mushrooms',
  ],
  mains: [
    'Steaks&Chops',
    'Salmon Patties',
    'Reverse-Sear Prime Rib Roast',
    'Beef Stroganoff',
    'Macaroni&Cheese',
  ],
  desserts: [
    'Pecan Pie',
    'Tiramisu',
    'Cheese Cake',
    'Cookie Balls',
    'Panettone Bread Pudding',
  ],
  randomAppetizers() {
    return this.appetizers[~~(Math.random() * this.appetizers.length)];
  },
  randomMains() {
    return this.mains[~~(Math.random() * this.mains.length)];
  },
  randomDesserts() {
    return this.desserts[~~(Math.random() * this.desserts.length)];
  },
};
const generateMeals = () => {
  console.log(
    `\n Your meal is : \n ${randomMeals.randomAppetizers()}, ${randomMeals.randomMains()}, ${randomMeals.randomDesserts()} \n`
  );
};
generateMeals();
