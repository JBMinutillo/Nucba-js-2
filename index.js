const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
  },

  {
    id: 3,
    nombre: "pizza Napolitana",
    precio: 1350,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas"],
  },

  {
    id: 4,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
  },

  {
    id: 5,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas", "Cebolla"],
  },

  {
    id: 6,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
  },
];

//a)  Las pizzas que tengan un id impar.
//b) Responder: ¿Hay alguna pizza que valga menos de $600?
//c) El nombre de cada pizza con su respectivo precio.
//d) Todos los ingredientes de cada pizza (En cada iteración imprimir los ingredientes de la pizza que se esta recorriendo).
// Ayuda: van a tener que realizar dos recorridos, ya que cada pizza del array de pizzas tiene una propiedad "ingredientes"
// cuyo valor es un array con ingredientes.

//const a = [];

// const ids = pizzas.forEach((i) => {
//  const b = i.id;
//    if(b % 2 === 1){
//      a.push(b);
//      console.log( "Los id impar son " + a)
//  }});

//  const a = [];

//  const MenosDe600 = pizzas.forEach((i) => {
//    const b = i.precio;
//    if (b < 600 ) {
//      a.push(b)
//      console.log("Las pizzas que valen menos de 600 son " +  a.length)
//  }})

 //const a = [];

 //const NombreyPrecio = pizzas.forEach((i) => {
 //console.log(`El ${i} tiene el siguiente coste ${i.nombre}: ${i.precio}`);
 //})

 const a = [];

 const ingredientes = pizzas.forEach ((i) => {
  const b = "La " + i.nombre + " contiene " + i.ingredientes;
  console.log(b)
 })
