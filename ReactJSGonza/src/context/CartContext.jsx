import { createContext, useContext, useState } from 'react';

export const CartContext = createContext({
  cart: [],
  addItem: () =>{},
  removeItem: () =>{},
  isInCart: () =>{},
  clearCart: () => {},
  totalQuantity: 0,
  total: 0
})

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])
console.log(cart)

const addItem = (productToAdd) => {
  if(!isInCart(productToAdd.id)) {
    setCart(prev => [...prev, productToAdd])
  } else {
    console.log("el producto ya está agregado")
  }
}

const removeItem = (id) => {
    const cartUpdate = cart.filter(prod => prod.id != id)
    setCart(cartUpdate) 
}

const isInCart = (id) => {
  return cart.some(prod => prod.id === id)
}

const getTotalQuantity = () => {
    let totalQuantity = 0

    cart.forEach(prod => {
        totalQuantity += prod.quantity
    })

return totalQuantity

}

const totalQuantity = getTotalQuantity()

const clearCart = () => {
  setCart([])
}

const getTotal = () => {
  let total = 0

  cart.forEach(prod => {
    total += prod.price  * prod.quantity

  })

  return total
}

const total = getTotal()

    return(
        <CartContext.Provider value={{total, clearCart, cart, addItem, removeItem, totalQuantity, isInCart}}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => {
  return useContext(CartContext)
}