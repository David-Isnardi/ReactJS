import { useState } from "react"
import classes from './ItemCount.module.css';
const ItemCount = ({stock, onAdd}) => {
const [count, setCount] = useState(0)
  
const descrement = () => {
  if(count > 1) {
    setCount(prev => prev - 1)
  }
}

const increment = () => {
  if(count < stock) {
    setCount(prev => prev + 1)
  }
}

    return(

        
      <div className={classes.padrebotones}>
        <h1>{count}</h1>
        <button onClick={increment} className={classes.mas}>+</button>
        <button onClick={() => onAdd(count)} className={classes.añadircarro}>Añadir al carrito</button>
        <button onClick={descrement} className={classes.menos}>-</button>
      </div>

    )
  }  

export default ItemCount