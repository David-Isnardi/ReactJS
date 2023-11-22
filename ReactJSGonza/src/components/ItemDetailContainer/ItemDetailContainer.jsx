import { useState, useEffect } from "react"
//import { getProductById, getProducts } from "../asyncMode"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import classes from './ItemDetailContainer.module.css';

//import { getDoc, doc} from "firebase/firestore";
//import { db } from "../../services/firebase/firebaseConfig";
import { getProductById } from "../../services/firebase/firestore/products";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)

const {itemId} = useParams()

    useEffect(() => {
//setLoading(true)


//getDoc(productRef)
//.then(documentSnapshot => {
//    const fields = documentSnapshot.data()
//    const productAdapted = { id: documentSnapshot.id, ...fields}
//    setProduct(productAdapted)
//})
//.catch(error => {
 //   console.error(error)
//})
//.finally(() => {
 //setLoading(false)
//})

        getProductById(itemId)
       .then(response => {
            setProduct(response)
//})
//.finally(() => {
 //setLoading(false)
//})
       })
    }, [itemId])

    return(
        <div>
            <h1 className={classes.titulo}>Detalles del producto</h1>
            <ItemDetail {...product}/>
        </div>
    )
}

export default ItemDetailContainer