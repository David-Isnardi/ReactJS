import { useState, useEffect } from "react"
//import { getProducts, getProductsByCategory } from "../asyncMode"
import ItmelList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import classes from './ItemListContainer.module.css';
import { getProducts } from "../../services/firebase/firestore/products";

const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState ([])

const {categoryId} = useParams()

    useEffect(()=> {
        const asyncFunction = () => getProducts(categoryId)  
        asyncFunction(categoryId)
        .then(response => {
            setProducts(response)
        })
    }, [categoryId])

    return(
        <div onClick={() => console.log("click en itemlistcontainer")}>
            <h1 className={classes.titulo}>Este es nuestro catálogo</h1>
            <ItmelList products={products}/>
        </div>
    )
}

export default ItemListContainer