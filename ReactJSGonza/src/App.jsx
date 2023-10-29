import './App.css'
import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
    <BrowserRouter>
     <Navbar/>
     <Routes>
     <Route path='/' element={<ItemListContainer greeting={"Listado de productos"}/>} />
     <Route path='/category/:categoryId' element={<ItemListContainer greeting={"Listado de productos filtrados"} />}/>
     <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
