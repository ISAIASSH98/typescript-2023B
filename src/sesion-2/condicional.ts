function MayorDeEdad(edad:number) {
    const message : string = edad > 17 ? 'es mayor de edad' : 'es menor de edad'
    console.log(message)
    
}
MayorDeEdad(12)
MayorDeEdad(91)

/* hay que evitar bloques innecesarios, por ejemplo, else
ya que al se un bloque por defecto podemos declarar codigo antes
o despues que al final de cuentas siempre se va a ejecutar */

const edad:number = 10
let message = 'es menor de edad'
if (edad > 17) {
    message = 'es mayor de edad'
}
console.log(message)



/* if (edad > 17) {
    message = 'es mayo de edad'
}else{
    message = 'es menor de edad'
} */

