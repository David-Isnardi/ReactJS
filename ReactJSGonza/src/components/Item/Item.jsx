const Item = ({id, name, description, img, price}) => {
    return(
    
    <div key={id}>
    <h1>{name}</h1>
    <img src={img} style={{ width: 500 }} />
    <h2>{description}</h2>
    <h2>${price}</h2>
    <button>Ver detalles</button>
    </div>
   
    )
}

export default Item