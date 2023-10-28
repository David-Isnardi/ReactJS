import './App.css'
import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import BasicExample from './components/Navbar/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
/*import { BrowserRouter, Routes, Route } from 'react-router-dom';*/

function App() {
  return (
    <>
     <Navbar/>
      <ItemListContainer greeting={"Listado de productos"}/>
      <ItemDetailContainer/>
    </>
  )
}

export default App
