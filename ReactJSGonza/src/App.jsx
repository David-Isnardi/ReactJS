import './App.css'
import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import CarouselFadeExample from './components/PageInicio/PageInicio';
import { CartProvider } from './context/CartContext';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';
import { NotificationProvider } from './components/notification/NotificationContext';


function App () { 
  return (
    <>

 <CartProvider>
    <BrowserRouter>
     <Navbar/>
     <NotificationProvider>
     <Routes>
     <Route path='/' element={<CarouselFadeExample/>}/>
     <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
     <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
     <Route path='/cart' element={<Cart/>}/>
     <Route path='/checkout' element={<Checkout/>}/>
      </Routes>
      </NotificationProvider>
    </BrowserRouter>
    </CartProvider>
    <Footer/>

    </>
  )
}

export default App
