// Create the string 
let my_name = 'Art Tongan';
console.log(`My name is ${my_name}`);

// Just the fun game 
let coffe = 5;
let bagel = 3;
let total = 0;

total = coffe + bagel;
console.log(`Total cost is: $${total}`);

//Challenge with string 
let ball = 2095;
let shirt = 799;
let shipping = 249.5;
let total_price =0;
let total_item = 0;
let total_ship= 0;

total_item = (2 + 2);
total_price= (((ball*2) + (shirt*2))/ (100));
total_ship = ((shipping * total_item)/100);
total_tax = (((total_price + total_ship)*10)/100);
 
console.log("Challenge the total price Item ");
console.log(`Items(${total_item}):                  $${total_price}`);
console.log(`Shipping                   $${total_ship}`);
console.log(`Total before tax:          $${total_price + total_ship}`);
console.log(`Estimated tax(10%):         $${total_tax}`);
console.log(`Order Total:                $${total_tax + total_price + total_ship}`);

