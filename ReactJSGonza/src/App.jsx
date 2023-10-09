import './App.css'
import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App() {
  return (
    <>
    <Navbar/>
    <ItemListContainer greeting={"Hola cliente"}/>
    </>
  )
}

export default App
