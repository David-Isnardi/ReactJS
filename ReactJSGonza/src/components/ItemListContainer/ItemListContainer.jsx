import classes from "./ItemListContainer.module.css"
import { useState, useEffect } from "react"
import { getProducts } from "../asyncMode"
import ItemList from "../ItemList/ItemList"


const ItemListContainer = ({greeting}) =>{
    const [products, setProducts] = useState([])

    useEffect(() =>{
        getProducts()
        .then(result => {
            setProducts(result)
        })
    }, [])



    return(
        <>
        <h1 className={classes.color}>{greeting}</h1>
        <ItemList products={products}/>
        </>
    )
}

export default ItemListContainer