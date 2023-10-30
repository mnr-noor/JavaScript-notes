// values  are stored on the stack

const name='Maki';
const age= 21;

//reference values are stored on the heap
const person={
    name:'Eurekaa',
    age:'20',
};

let newName=name;
newName='Eri';

let newPerson=person;
newPerson.name='noor';


console.log(name, newName);
console.log(person, newPerson);
