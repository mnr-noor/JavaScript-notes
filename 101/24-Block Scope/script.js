const x =100;

if (true){
    const y=200;
    console.log(x+y);
}

// console.log(x+y);

for (let i=0; i<=10; i++){
    console.log(i);
}

if (true){
    const a=500;
    let b = 600;
    var c=700;
}

console.log(c);


//Function scoped
function run(){
    var d=100;
    console.log(d);
}

run();

console.log(d);