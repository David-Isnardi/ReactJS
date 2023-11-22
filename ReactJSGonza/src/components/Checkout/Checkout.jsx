import { useCart } from "../../context/CartContext"
import { getDocs, collection, addDoc, query, where, documentId, writeBatch, DocumentSnapshot } from "firebase/firestore"
import { db } from "../../services/firebase/firebaseConfig"
import { useState } from "react"
import ContactForm from "../ContactForm/ContactForm"
import classes from './Checkout.module.css';


const Checkout = () => {
const [orderId, setOrderId] = useState("")
const [loading, setLoading] = useState(false)
const {cart, total, clearCart} = useCart()

const createOrder = async (userData) => {
    try{
        setLoading(true)

        const objOrder = {
            buyer: {
                nombre: userData.nombre,
                gmail: userData.gmail,
                telefono: userData.telefono
                },
                items: cart,
                total
        }
            
            const batch = writeBatch(db)
            const outOFStock = []
            
            const ids = cart.map(prod => prod.id)
            
            const productsRef = query(collection(db, "products"), where(documentId(), "in", ids))
            
            //getDocs(productsRef).then(response => {})
            // const QuerySnapshot = await getDocs(productsRef)
            const {docs} = await getDocs(productsRef)
            
            docs.forEach(async documentSnapshot => {
                const fields = documentSnapshot.data()
                const stockDb = fields.stock
            
                const productAddedToCart = cart.find(prod => prod.id === documentSnapshot.id)
                const prodQuantity = productAddedToCart.quantity
            
                if(stockDb >= prodQuantity) {
                   batch.update(documentSnapshot.ref, {stock: stockDb - prodQuantity})
                } else{
                    outOFStock.push({id: documentSnapshot.id, ...fields})
                }
            
                if(outOFStock.length === 0) {
                    const ordersRef = collection(db, "orders")
                    const {id} = await addDoc(ordersRef, objOrder)
                    batch.commit()
                    clearCart()
                    setOrderId(id)
                    console.log(`El id de su orden es ${id}`)
                } else{
                    console.log("Producto agotado")
                }
            })
    } catch(error) {
        console.error("hubo un error generado en la orden")
    }finally {
       setLoading(false)
    }
    
}

if(loading){
    return <h1 className={classes.textos}>¡Se está generando su orden!</h1>
}

if(orderId) {
    return <h1 className={classes.textos}>El id de su orden es: {orderId}</h1>
}

    return(
        <>
        <h2 className={classes.titulo}>Completa tus datos por favor.</h2>
        <ContactForm onCreate={createOrder}/>
        </>
    )
}

export default Checkout