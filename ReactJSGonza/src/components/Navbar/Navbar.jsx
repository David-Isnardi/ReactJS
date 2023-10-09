import CartWidget from "../CartWidget/CarWidget"

const Navbar = () => {
    return(
        <nav>
            <h1>MotorSports</h1>
            <section>
                <button>Vehículos</button>
                <button>Repuestos</button>
                <button>Servicios</button>
            </section>
            <CartWidget/>
        </nav>
    )
}

export default Navbar