const productos = [
    {id:"1", nombre:"1. Entradas Festival Primavera Sound", precio: 20000 },
    {id:"2", nombre:"2. Entradas Lollapalooza Argentina", precio: 30000 },
    {id:"3", nombre:"3. Entradas Coldplay Buenos Aires", precio: 10000 },
    {id:"4", nombre:"4. Entradas para Diego Torres", precio: 5000 }
];

let carrito = []
const listaNombres = productos.map(nombre => nombre.nombre)

let seleccion = prompt("Bienvenido, ¿Desea comprar algunas de nuestras entradas? Responda si o no")

while(seleccion != "si" && seleccion != "no" ){
    alert("Por favor ingrese si o no")
    seleccion = prompt("Bienvenido, ¿desea comprar algún producto? (Ingrese 'si' o 'no')")
}




if(seleccion == "si"){
    let todoslosProductos = productos.map(
        (producto) => producto.nombre + " " + "$" + producto.precio 
    );
    alert("A continuación se visualizara nuestro catalogo de entradas." + "\n" + "(Presione Aceptar para continuar)")
}else if (seleccion =="no"){
    alert("Gracias por ingresar, vuelva pronto")
}




while(seleccion != "no"){
    let todoslosProductos = productos.map(
        (producto) => producto.nombre + " " + "$" + producto.precio 
    );
    let producto = prompt("Seleccione mediante el número, la entrada que desea comprar: "  + "\n" + "\n" + todoslosProductos.join("\n"))
    let precio = 0

    if(producto =="1" || producto =="2" || producto =="3" || producto =="4"){
        switch(producto){
            case "1":
                precio = 20000
                break;
            case "2":
                precio = 30000
                break;
            case "3":
                precio = 10000
                break;
            case "4":
                precio = 5000
                break;
            default:
                break;
        }
    let unidades = parseInt(prompt("¿Cuantas unidades desea comprar?"))
    carrito.push({producto, unidades, precio})
    console.log(carrito)



    }else{
        alert("No disponemos de esa prenda")
    }

    seleccion = prompt("¿Desea seguir comprando? (Ingrese 'si' o 'no')")

    while(seleccion === "no"){
        alert("Gracias por su compra, esperamos que disfrutes del evento!")
        carrito.forEach((carritoFinal) => {
        console.log(`producto ${carritoFinal.producto}, unidades: ${carritoFinal.unidades}, total a pagar por producto $${carritoFinal.unidades * carritoFinal.precio}`)

        
    })
    break;
    }
}

const total = carrito.reduce((acc, el) => acc + el.precio * el.unidades, 0)
console.log(`El total a pagar por su compra es $${total}`);
document.body.innerHTML = (`El total a pagar por su compra es $${total}`)