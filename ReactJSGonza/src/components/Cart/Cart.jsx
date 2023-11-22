import { useCart } from "../../context/CartContext"
import { Link } from "react-router-dom"
import classes from './Cart.module.css';
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";

const Cart = () => {

    const{clearCart, totalQuantity, getTotal} = useContext(CartContext)

    const {cart} = useCart()
    return(
        <div>
        <h2 className={classes.titulocarrito}>Carrito</h2>
        <div>
            {
                cart.map(prod =>{
                    return(
                        <div key={prod.id}>
                            <div className={classes.productos}>
                            <h3>{prod.name}</h3>
                            <h3>{prod.price}</h3>
                            <h3>Unidades: {totalQuantity}</h3>
                            </div>
                        </div>
                    )
                })
            }
        </div>
        <div className={classes.botones}>
        <Link to="/checkout" className={classes.botonescompra}><h4>Comprar🛒</h4></Link>
        <button onClick={() => clearCart()} className={classes.botonescompra}><h4>Eliminar productos🗑️</h4></button>
        </div>

        </div>


    )
}

export default Cart