let tuple1 : [string, boolean]
tuple1 = ['test', true]
tuple1 = ['true',false]
/* TS nos ayuda a tipar arreglos y estos solo podran aceptar los valores
que le hayamos indicado */


let a: boolean = false
tuple1.forEach(value =>{
if (typeof value == 'boolean') {
     a = value

    }
})
console.log(tuple1)