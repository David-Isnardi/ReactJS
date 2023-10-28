import { useState } from "react"

const ItemCount = ({stock, onAdd}) => {
const [count, setCount] = useState(0)
  
const descrement = () => {
  if(count > 0) {
    setCount(prev => prev - 1)
  }
}

const increment = () => {
  if(count < stock) {
    setCount(prev => prev + 1)
  }
}

    return(
      <div>
        <h1>{count}</h1>
        <button onClick={increment}>Increment</button>
        <button onClick={() => onAdd(count)}>Añadir al carrito</button>
        <button onClick={descrement}>Descrement</button>
      </div>
    )
  }  

export default ItemCount