let x; 

const name='Eurekaa';
const age= 21;

x='Hello, my name is ' + name+' and I am '+ age+'yo';

//Template Literals
x=`Hello , my name is ${name} and Iam ${age} yo`;

// String Properties and methods

const s= new String('Hello World');

x=typeof s;
x=s.length;
//Access value by key 
x=s[0];

x= s.__proto__;

x=s.toUpperCase();
x=s.charAt(0);
x=s.indexOf('e');
x=s.substring(0,4);
x=s.slice(-11,-6);
x=s.replace('World', 'Maki ');

x=s.includes('Hello');
x= s.split('');
console.log(x);