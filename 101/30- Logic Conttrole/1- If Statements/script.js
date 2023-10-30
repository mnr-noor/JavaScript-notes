
if (true){
    console.log('This is true ');
}

const x=10;
const y =5;

if (x>y){
    console.log(`${x} is greater than ${y}`);
}
//-------------------------------------------
const d =new Date (10,30,2022,21,0,0);

const hour = d.getHours();

if (hour < 12){
    console.log('MORNING');
}else if (hour <18){
    console.log('G AFTERNOON');
}
else {
    console.log('GN');
}


//Nested If

if (hour <12){
    console.log('MORNING');

    if (hour ===6){
    console.log('Wake Up!');
    }
}else if (hour <18){
    console.log('G AFTERNOON');
}
else {
    console.log('GN');

    if (hour >= 20){
        console.log('zzzzzz');
    }
}


if(hour>=7 && hour<15){
    console.log('It is work time');
}

if (hour ===6 || hour===20){
    console.log('Brush your teeth');
}