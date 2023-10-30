
let x;
//Array Literal
const numbers =[12,45,33,29,30];


//Arra Constructor

const maki= new Array('gym', 'muscle','food');

x=numbers[0]+ numbers[3];
x=`My fav is : ${maki[2]}`;

x= numbers.length;
maki[2]='gains';
maki[3]='food';
maki[maki.length]='protein';
x=maki;
console.log(x);