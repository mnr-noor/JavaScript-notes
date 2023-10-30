const d= new Date (2002,1,10,8,0,0);

const month = d.getMonth();
const hour= d.getHours();

switch(month){
    case 1:
        console.log('It is January');
        break;
    case 2:
        console.log('It is Fabruaryy');
        break;
    default:
        console.log('Boo');   
}

switch (true){
    case hour <12:
        console.log('GM');
        break;

}