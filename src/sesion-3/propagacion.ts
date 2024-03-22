let firstObjt: object = {id: 1, name: 'first'}
let secondObj: object = {...firstObjt}


let objName : object = {name: 'juan', id: 34}
let objId: object = {id: 2}
//let obj3: object = {...objId, ...objName}

/* La propagacion de objetos , nos sirve para evitar asignar
la asignacion de valores explicitamente */
let obj3  = {...objName, ...objId}

console.log(obj3)

let arreglo1 = [1,2,3]
let arrelgo2 = [4,5,6]

let arreglo3 = [...arreglo1, ...arrelgo2]  
console.log(arreglo3)