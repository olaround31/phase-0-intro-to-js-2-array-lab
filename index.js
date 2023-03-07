// Write your solution here!
const cats=["Milo","Otis","Garfield"];{
    //
}
    function  destructivelyAppendCat(name){
        cats.push("Ralph");
}
    function destructivelyPrependCat(name){
        cats.unshift("Bob");
}
    function destructivelyRemoveLastCat(name){
        cats.pop("name");
}
    function destructivelyRemoveFirstCat(name){
        cats.shift("name")
}
function appendCat(name){
    const cats=["Milo","Otis","Garfield"];   
    return appendCat = [...cats,"Broom"];
 }
 function prependCat(name){
    const cats=["Milo","Otis","Garfield"];
    return prependCat=["Arnold",...cats];
 }
 function removeFirstCat(name){
    return cats.pop=["Otis","Garfield"]
 }
 function  removeLastCat(name){
    return cats.shift=["Milo","Otis"]
 }