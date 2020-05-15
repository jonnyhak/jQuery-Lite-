const DOMNodeCollection = require('./dom_node_collection.js');

Window.prototype.$l = function(arg){
    let selector; 
    let functions = [];

    

    if (typeof arg === "string") {
        selector = document.querySelectorAll(arg);
        return new DOMNodeCollection(Array.from(selector));
    } else if (arg instanceof HTMLElement){
        return new DOMNodeCollection([arg]);
    } else if (arg instanceof Function && document.readyState === "complete") {
        functions.push(arg);

        functions.forEach((f) => {
            f();
        });

    } else if(arg instanceof Function){
        functions.push(arg);
    }

    // document.addEventListener('DOMContentLoaded', () => {
    //     functions.forEach((f) => {
    //         f();
    //     });
    // });

}

function extend(obj1, ...objects){
    let dummy = obj1;
    objects.forEach(ele => {
        dummy = {...dummy, ...ele};
    });
    console.log(dummy);
    obj1 = dummy;
}

