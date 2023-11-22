import { useCart } from '../../context/CartContext';
import classes from './CarWidget.module.css';
import { useNavigate } from 'react-router-dom';

const CartWidget = () =>{

    const {totalQuantity} = useCart()

    const navigate = useNavigate()

    return(
        <button onClick={() => navigate("/cart")} className= {classes.padrecarro}>
            <img src="../img/carro.png"/>
            <div className={classes.numerocarro}>{totalQuantity}</div>
        </button>
    )
}

export default CartWidget