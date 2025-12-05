console.log("Hello Welcome to Loop game");
let i = 10;
while (i >= 0)
{
    i = i-1 ;
}
console.log(i);
//-----Run from 10 to 0 ------//
for(let i = 10 ; i >= 0 ; i = i-1)
{
    console.log(`the numbers is ${i}`);
}

//-------Print the charactor Hello -----//
let text ='Hello';
for (let i = 0 ; i < text.length ;i++)
{
    console.log(`The index is ${i}`);
    console.log(`${text[i]}`)
}

//-------- Loop ----------//

let wrong = 0;
let pass = 'Tongan' ;
while (wrong < 3)
{
    let Mypass = prompt('Input from the users: ');
    if (Mypass === pass)
    {
        console.log('The password is corrected !');
        break;
    }
    else 
    {
        wrong ++;
        console.log("The password is incorrect");
        if (wrong === 3 ){
            console.log('Try the five minute later');
        }
        
    }

}

//--------Use for Loop ---------//
