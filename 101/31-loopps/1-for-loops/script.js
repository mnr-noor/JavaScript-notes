// for(let i=1 ; i<=10 ; i++){
//     if(i===7) {
//         console.log('7 is my lucky number');
//     }else{
//     console.log('Number '+i);
//     }
// }


// //Nest loops 

// for (let i=1; i<=10; i++){
//     console.log('Number '+i);
//     for(let j=1; j<=10; j++){
//         console.log(`${i} * ${j} =${i*j}`);
//     }
// }

//Loop through an array

// const names= ['Maki', 'Eurekaa', 'karima', 'jojo' ];

// for (let i=0 ; i<names.length; i++){
//     if(i===2){
//         console.log(names[i]+ 'is the best');
//     } else {

//     console.log(names[i]);
//     }
// }


// Break

for (let i=0; i<=20; i++ ){
    if(i===15){
        console.log('Breaking...');
        break;
    }
    console.log(i);
}

// Continue 

for(let i=0 ; i<=20; i++){
    if(i===13){
        console.log('skipping 13...');
        continue;
    }
    console.log(i);
}
