import ItemCount from "../ItemCount/ItemCount"
import classes from './ItemDetail.module.css';

const ItemDetail = ({id, img, name, price, marca, tipo, clase, stock}) => {
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
    <ItemCount stock={stock}/>
    </div>
   
    </div>
   
    )
}

export default ItemDetail