// Exercise 1 
let soup = 10;
let burgers = 8;
let ice_cream = 5;

let Totlal = 0;

Totlal = ((soup*3)+ (burgers*2)+ (ice_cream));
console.log("The total for 1 person: ",Totlal);

//Exercise 2 
Totlal = (Totlal*3);
console.log("The total for 3 person: ",Totlal);

//Exercise 3
let toaster = 1850;
let shirt = 750;

let total = 0;
total = (((toaster) + (shirt*2))%(100));
console.log(`Your cloth total is: ${total}$ `);
// Exersise 4 calculate the tax of the cloths 
let total1;
let tax = 10 ;
total1 = (((total*tax)/(100))+(total));
console.log(`Total with tax 10% is: ${total1}$ `);

// Exercise
let total2; 
tax = 20;
total2 = (((total*tax)/(100))+(total));
console.log(`Total with tax 20% is: ${total2}$ `);

// Round number condition trick 
function weirdRound (num) {
    if (num >= 2.5){
        return Math.floor (num);
    }
    else {
        return Math.ceil(num)
    }
}
console.log("Round the Numbers big to small and small to big");
console.log(weirdRound(2.8));
console.log(weirdRound(2.2));

// Convert the tamperatures

function ConverttoF(Celsius){
    let faren ;
    faren = (((Celsius*9)/5)+ (32));
    return faren;
}

function ConvertoCel(Fahren){
    let cel ;
    cel = (((Fahren - 32)*5) / 9) ;
    return cel;
}
console.log("Convert the temperatures F -> C and C -> F ")
console.log(ConverttoF(25),"F");
console.log(ConvertoCel(86),"C");
console.log(ConverttoF(-5),"F")


