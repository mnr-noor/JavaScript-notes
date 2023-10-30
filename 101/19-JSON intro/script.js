const post = {
    id: 1,
    title: 'Post ONE',
    body: 'This is the body ',
};

//Convert to JSON String 

const str= JSON.stringify(post);

// Parse JSON 
const obj = JSON.parse(str);

const posts =[
    {id: 2,
    title: 'Post ONE',
    body: 'This is the body ',
    },

    {id: 3,
        title: 'Post ONE',
        body: 'This is the body ',
        },
]


const str2=JSON.stringify(posts);

console.log(str2);