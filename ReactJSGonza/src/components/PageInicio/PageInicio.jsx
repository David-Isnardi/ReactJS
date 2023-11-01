import Carousel from 'react-bootstrap/Carousel';
import classes from './PageInicio.module.css';


const Hola = () =>{
  return(
    <h1>Holaaaaaaaaaaaaaaa</h1>
  )
}

function CarouselFadeExample() {
    
  return (

<section>
<h1 className={classes.tituloinicio}>Bienvenido a MotorSport</h1>

    <Carousel fade className={classes.padrecarrusel}>
      <Carousel.Item>
        
        <img src="/img/carrusel 1.jpg"/>
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
      <img src="/img/carrusel 2.png"/>
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
      <img src="/img/carrusel 3.jpg"/>
        <Carousel.Caption>
        
        </Carousel.Caption>
      </Carousel.Item>
      
    </Carousel>
    <h1 className={classes.subtituloinicio}>Los mejores precios y la mejor calidad</h1>
</section>
  );

}

export default CarouselFadeExample;