import { useState } from "react"
import classes from './ContactForm.module.css';

const ContactForm = ({onCreate}) => {
    const [nombre, setNombre] = useState("")
    const [gmail, setGmail] = useState("")
    const [telefono, setTelefono] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        onCreate({nombre, gmail, telefono})
    }

    return (
        <form onSubmit={handleSubmit} className={classes.padreformulario}>
            <div  className={classes.formulario}>
            <h1>Nombre y apellido</h1><input value={nombre} onChange={(e) => setNombre(e.target.value)}/>
            <h1>Gmail</h1><input value={gmail} onChange={(e) => setGmail(e.target.value)}/>
            <h1>Tlf</h1><input type="number" value={telefono} onChange={(e) => setTelefono(e.target.value)}/>
            </div>
            <button className={classes.botonorden}>Generar Orden</button>
        </form>
    )
}

export default ContactForm