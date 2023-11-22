import { useState} from "react";
import ItemCount from "../ItemCount/ItemCount"
import classes from './ItemDetail.module.css';
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { useNotification } from "../notification/NotificationContext";

const ItemDetail = ({id, img, name, price, marca, tipo, clase, stock}) => {

const {addItem, isInCart} = useCart()

const {setNotification} = useNotification()

const handleOnAdd = (quantity) => {
    
    const productToAdd = {
        id, name, price, quantity
    }

    addItem(productToAdd)
    setNotification("succes", ` √ Se agregaron correctamente ${quantity} ${name}.`)
}

    return(
    
    <div key={id} className={classes.padretarjeta}>
    <img src={img}/>
    <h1>{name}</h1>
    <div className={classes.detalles}>
    <h2>{price}</h2>
    <h2>{marca}</h2>
    <h2>{tipo}</h2>
    <h2>{clase}</h2>
    </div>
    <div className={classes.botonescarro}>
    </div>

{
    isInCart(id) ? (
        <Link to="/cart" className={classes.finalizarboton}>Finalizar Compra</Link>
    ) : (
        <ItemCount stock={stock} onAdd={handleOnAdd}/>
    )
}
    </div>

   
    )
    
}

export default ItemDetail