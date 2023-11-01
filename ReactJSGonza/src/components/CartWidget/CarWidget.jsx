import classes from './CarWidget.module.css';

const CartWidget = () =>{
    return(
        <button className= {classes.padrecarro}>
            <img src="../img/carro.png"/><a className= {classes.numerocarro} >0</a>
        </button>
    )
}

export default CartWidget