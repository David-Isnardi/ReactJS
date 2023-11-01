import classes from './Footer.module.css';

const Footer = () => {
    return(
    <footer>
        <div className= {classes.contenedorfooter}>
            <div className= {classes.contenedorfooter2}>

                <div className= {classes.footerlinks}>
                <img src="../img/marcascoches.png" alt="Logo" class="icono"/>
                </div>

                <div className= {classes.footerlinks}>
                    
                    <ul>
                    <h4>Ayuda</h4>
                        <li><a href="#">¿Problemas en las compras?</a></li>
                        <li><a href="#">Preguntas frecuentes</a></li>
                        <li><a href="#">Errores en la página</a></li>
                        <li><a href="#">Problemas con su tarjeta</a></li>
                    </ul>
                </div>

                <div className= {classes.footerlinks}>
                   
                    <ul>
                    <h4>Contacto</h4>
                        <li><a href="#">TLF: +94 1654 4832</a></li>
                        <li><a href="#">Correo: ayudausuario@motorports.com</a></li>
                        <li><a href="#">Ubicación: Ver en Google Maps</a></li>
                    </ul>
                </div>

                <div className= {classes.footerlinksredes}>
                    
                    <ul>
                    <h4>Redes sociales</h4>
                    <img src="../img/fb.png" alt="" />
                    <img src="../img/ig.png" alt="" />

                    </ul>
                </div>

            </div>
        </div>
    </footer>
    )
}

export default Footer