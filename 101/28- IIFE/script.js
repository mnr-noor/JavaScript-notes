
(function(){
    const user = 'John';
    console.log(user);
    const hello = ()=> console.log('Hello from th IIFE');
    hello();
})();

(function(name){
    console.log('Hello' +name);
})('Shawn');

(function hello(){
    console.log('Hello');
})();