import { Link } from "react-router-dom"
import classes from './Item.module.css';
const Item = ({id, img, name, price, marca, tipo, clase}) => {
    return(
    <section className={classes.padrecards}>
    <div key={id}>
    <img src={img} />
    <div className={classes.cards}>
    <h1>{name}</h1>
    <h2>{price}</h2>
    <h2>{marca}</h2>
    <h2>{tipo}</h2>
    <h2>{clase}</h2>
    
    <Link to={`/item/${id}`} className= {classes.masdetalle} >Ver detalles</Link>
    </div>
    </div>
    </section>
    )
}

export default Item