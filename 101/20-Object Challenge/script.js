
const library = [
    {
        title: 'UGLY LOVE',
        author: 'Colleen Hoover',
        status :{
            own: true,
            reading:false,
            read: false
        }
    },

    {
        title: 'it ends with us  ',
        author: 'Colleen Hoover',
        status :{
            own: true,
            reading:false,
            read: false
        }
    },

    {
        title: 'it starts with us',
        author: 'Colleen Hoover',
        status :{
            own: true,
            reading:false,
            read: false
        }
    },

]


library[0].status.read=true;
library[1].status.read=true;
library[2].status.read=true;

// console.log(library);

 //Destructure

const {title:firstBook}=library[0];

console.log(firstBook);

//turn library object into a JSON string

const libraryJSON=JSON.stringify(library);

console.log(libraryJSON);