let x;
const todo=new Object();

todo.id=1;
todo.name='Buy Milk';
todo.comleted=false;
x=todo;

const person ={
    adress:{
        coords:{
            lat:42.444,
            lng:-71.7565
        }
    }
}

x=person.adress.coords.lat;

const obj1={a:1, b:2};
const obj2={c:3, d:4};

const obj3= {...obj1,...obj2};
const obj4=Object.assign({}, obj1, obj2);

const todos=[
    {id:1, name:'Buy Milk'},
    {id:2, name:'Buy food'},
    {id:3, name:'gym'},
];


x=todos[0].name;

// put all the keys in array
x= Object.keys(todo);

x=Object.keys(todo).length;

x=Object.values(todo);

x=Object.entries(todo);

x=todo.hasOwnProperty('age');

console.log(x);
