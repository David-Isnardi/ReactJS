import { useState, useEffect } from "react"
import { getProductById, getProducts } from "../asyncMode"
import ItemDetail from "../ItemDetail/ItemDetail"

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)

    useEffect(() => {
        getProductById("2")
        .then(response => {
            setProduct(response)
        })
    }, [])

    return(
        <div>
            <h1>Detalle de producto</h1>
            <ItemDetail {...product}/>
        </div>
    )
}

export default ItemDetailContainer