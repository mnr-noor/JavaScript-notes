let x;

const maki =['gym','muscle','gains'];
const eurekaa=['sleeping','coding','eating'];

// maki.push(eurekaa);

// x=maki[3][1];

const allPerso=[maki,eurekaa];

x=allPerso[1][0];
// Concat
x= maki.concat(eurekaa);

//Spread Operator(...)

x= [...maki,...eurekaa];

// Flatten Arrays

const arr =[1,2,[3,4],5,[6,7],8];
x=arr.flat();

// Static Methods on Array  Object

x=Array.isArray(maki);

x= Array.from('12345');

const y=1;
const z=2;
const w=4;
x=Array.of(z,y,w);



console.log(x);