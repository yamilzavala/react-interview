//var allow to call the variable before to define -> and return undefined
console.log(varVariable)
if(true) {
    var varVariable = 'this is a var variable'
}
//var allow to overwrite the variable with the same name
//var allow access out the scope where was defined
var varVariable = 'this is a var variable updated'
console.log(varVariable)

if(true) {
    const constVariable = 'this is a const valriable that exist only in the scope where was defined'
    let letVariable = 'this is a let variable';
    //let and const not allow to overwrite the variable with the same name
    let letVariable = 'this is a let variable uopdated';
    const constVariable = 'this is a const valriable that exist only in the scope where was defined updated'

    //let allow to change the value
    letVariable = 'new value'
    //const not allow to change the value
    constVariable = 'new value'
}
//let and const not allow access out the scope where was defined
console.log(letVariable)
console.log(constVariable)

const obj = {name: 'yamil'}
//const allow to change the values inside the obj, because wi are holding the same reference
obj.name = 'new name' 