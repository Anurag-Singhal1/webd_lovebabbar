console.log('Lets start');

// object create
let rectangle ={
    length: 1,
    breadth: 2,

    // beahviour is added through function
    draw: function(){
        console.log('drawing rectangle');
    }
};

// factory function : create an object and return that
function createRectangle() {
    return rectangle ={
        length: 1,
        breadth: 2,

        draw: function(){
            console.log('drawing rectangle');
        }
    };
    // return rectangle;   // instead of this, we can even put return in starting line in place of let.
}