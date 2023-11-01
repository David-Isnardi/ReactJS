const products = [

     /*Vehículos-------------------------------------*/ 
    {id: "1", 
    name: "BMW M3", 
    price: " Precio: $500.000",  
    category: "vehículos", 
    img: "/img/BMWGTRM3.jpg", 
    marca: "Marca: BMW.", 
    tipo: "Tipo: Deportivo.", 
    clase: "Gama: Alta",
    stock:50,
    },

    {id: "2", 
    name: "Chevrolet Camaro", 
    price: " Precio: $300.000",  
    category: "vehículos", 
    img: "/img/chevroletCamaro.jpg", 
    marca: "Marca: Chevrolet.", 
    tipo: "Tipo: Deportivo.", 
    clase: "Gama: Alta",
    stock:20,
    },

    {id: "3", 
    name: "Mazda RX-7", 
    price: " Precio: $550.000",  
    category: "vehículos", 
    img: "/img/Mazda.jpg", 
    marca: "Marca: Mazda.", 
    tipo: "Tipo: Deportivo.", 
    clase: "Gama: Alta",
    stock:90,
    },

    {id: "4", 
    name: "Nissan GTR-34", 
    price: " Precio: $350.000",  
    category: "vehículos", 
    img: "/img/NissanGTR34.jpg", 
    marca: "Marca: Nissan.", 
    tipo: "Tipo: Deportivo.", 
    clase: "Gama: Alta",
    stock:100,
    },

    {id: "5", 
    name: "Toyota Supra MK4", 
    price: " Precio: $380.000",  
    category: "vehículos", 
    img: "/img/ToyotaSupra.webp", 
    marca: "Marca: Toyota.", 
    tipo: "Tipo: Deportivo.", 
    clase: "Gama: Alta",
    stock:5,
    },

    {id: "6", 
    name: "Porshe 911", 
    price: " Precio: $800.000",  
    category: "vehículos", 
    img: "/img/Porshe 911.jpg", 
    marca: "Marca: Porshe.", 
    tipo: "Tipo: Deportivo.", 
    clase: "Gama: Alta",
    stock:10,
    },

    {id: "7", 
    name: "Dodge Challenger", 
    price: " Precio: $700.000",  
    category: "vehículos", 
    img: "/img/DodgeChallenger.jpg", 
    marca: "Marca: Dodge.", 
    tipo: "Tipo: Deportivo.", 
    clase: "Gama: Alta",
    stock:10,
    },

    {id: "8", 
    name: "Lamborhini Gallardo", 
    price: " Precio: $1.000.000",  
    category: "vehículos", 
    img: "/img/LamboGallardo.jpg", 
    marca: "Marca: Lamborhini.", 
    tipo: "Tipo: Deportivo.", 
    clase: "Gama: Alta",
    stock:10,
    },
    
/*Repuestos-------------------------------------*/   
{id: "9", 
name: "Alternador", 
price: " Precio: $50.000",  
category: "repuestos", 
img: "/img/alternador.png",
stock:12,
},

{id: "10", 
name: "Motor de arranque", 
price: " Precio: $30.000",  
category: "repuestos", 
img: "/img/burro.jpg", 
stock:10,
},

{id: "11", 
name: "Espejo retrovisor", 
price: " Precio: $1.000",  
category: "repuestos", 
img: "/img/espejo.png", 
stock:11,
},

{id: "12", 
name: "Neumáticos", 
price: " Precio: $10.000",  
category: "repuestos", 
img: "/img/neumatico.png", 
stock:10,
},
/*Servicios-------------------------------------*/  
{id: "13", 
name: "Mecánica",
tipo: "Obten una membresia", 
price: " Precio: $10.000",  
category: "servicios", 
img: "/img/mecanica.jpg", 
stock:10,
},

{id: "14", 
name: "Electricidad", 
tipo: "Obten una membresia", 
price: " Precio: $15.000",  
category: "servicios", 
img: "/img/electricidad.jpg", 
stock:10,
},

{id: "15", 
name: "Electrónica", 
tipo: "Obten una membresia", 
price: " Precio: $20.000",  
category: "servicios", 
img: "/img/electronica.jpg",
stock: 10, 
},
   
{id: "16", 
name: "Pintura", 
tipo: "Obten una membresia", 
price: " Precio: $30.000",  
category: "servicios", 
img: "/img/pintura.jpg", 
stock: 10,
},

]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductById = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        },500)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 500)
    })
}