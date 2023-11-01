import './App.css'
import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import CarouselFadeExample from './components/PageInicio/PageInicio';


function App() {
  return (
    <>
    <BrowserRouter>
     <Navbar/>
     <Routes>
     <Route path='/' element={<CarouselFadeExample/>}/>
     {/*<Route path='/' element={<ItemListContainer greeting={"Listado de productos"}/>} /> */}
     <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
     <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
      </Routes>
    </BrowserRouter>
    <Footer/>
    
    </>
  )
}

export default App
