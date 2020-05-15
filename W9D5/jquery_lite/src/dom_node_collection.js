function DOMNodeCollection(elements) {
    this.elements = elements;
    this.on("click", handleClick);
    // this.off("click", handleClick);
}

DOMNodeCollection.prototype.html = function (str) {
    if (str === undefined) {
        return this.elements[0].innerHTML;
    } else {
        this.elements.forEach(ele => {
            ele.innerHTML = str;
        });
    }
}

DOMNodeCollection.prototype.empty = function(){
    this.html("");
}

DOMNodeCollection.prototype.append = function(arg){
    this.elements.forEach(ele => {
        ele.append(arg);
    });
}


DOMNodeCollection.prototype.attr = function(arg){
    let result = [];
    this.elements.forEach(ele => {
        result.push(ele.getAttribute(arg));
    });
    return result;
}

DOMNodeCollection.prototype.addClass = function(str){
    this.elements.forEach(ele => {
        ele.className = ele.className + ` ${str}`;
    })
}

DOMNodeCollection.prototype.removeClass = function(str){
    this.elements.forEach(ele => {
        if (ele.className.includes(str)){
            let splitted = ele.className.split(" ");
            let mapped = [];
            splitted.forEach(el => {
                if (ele !== str) {mapped.push(ele)};
            });
           ele.className = mapped.join(" "); 
        }
    });
}

DOMNodeCollection.prototype.children = function(){
    let children = [];
    this.elements.forEach(ele =>{
        let htmlcol = ele.children;
        for(let i=0;i < htmlcol.length; i++){
            children.push(htmlcol.item(i));
        }
    }); 
    return new DOMNodeCollection(children);
}

DOMNodeCollection.prototype.parent = function(){
    let parents = [];
    this.elements.forEach(ele =>{
        parents.push(ele.parentElement);
    });
    return new DOMNodeCollection(parents);
}

DOMNodeCollection.prototype.find = function(selector){
    let result = [];
    this.elements.forEach(ele =>{
        let nodelist = ele.querySelectorAll(selector);
        result = result.concat(Array.from(nodelist));
    });
    return new DOMNodeCollection(result);
}

DOMNodeCollection.prototype.remove = function(){
    this.elements.forEach(ele => {
        ele.outerHTML = "";
    });
}

DOMNodeCollection.prototype.on = function(method, callback){
    this.elements.forEach(element => {
        element.addEventListener(method, callback, true);
    });
}

DOMNodeCollection.prototype.off = function (method, callback) {
    this.elements.forEach(element => {
        element.removeEventListener(method, callback, true);
    });
}
function handleClick(){
    alert("clicked");
}









module.exports = DOMNodeCollection;

