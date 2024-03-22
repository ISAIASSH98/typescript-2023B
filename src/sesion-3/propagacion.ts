let firstObjt: object = {id: 1, name: 'first'}
let secondObj: object = {...firstObjt}


let objName : object = {name: 'juan', id: 34}
let objId: object = {id: 2}
let obj3= {desc: 'test jsndkjdsnskjsdj'}

/* La propagacion de objetos , nos sirve para evitar asignar
la asignacion de valores explicitamente */
obj3  = {desc: obj3.desc, ...objId}

console.log(obj3)