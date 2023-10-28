const products = [
    {
        id: "1",
        name: "NombreProducto1",
        price: "1000",
        category: "Vehículos",
        img: "https://c.wallhere.com/photos/a4/26/auto_old_italy_classic_car_vintage_automobile_antique-850344.jpg!d",
        stock: 10,
        description: "Descripción de producto"
    },
    {id: "2", name: "NombreProducto2", price: 200, category: "vehículos", stock: 20, description: "Descripción de producto", img:"https://i.pinimg.com/originals/c4/d4/60/c4d46009bd7459e9460a4de86283baea.jpg"},
    {id: "3", name: "NombreProducto3", price: 400, category: "servicios", stock: 5, description: "Descripción de producto", img:"https://fc-abogados.com/es/wp-content/uploads/2020/08/Imagenes-para-post-30.jpg"},
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