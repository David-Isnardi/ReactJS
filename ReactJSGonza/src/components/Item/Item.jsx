const Item = ({id, name, img, price}) => {
    return(
        <div key= {id}>
        <h1>{name}</h1>
        <img src={img} style={{width: 500}}/>
        <h2>{price}</h2>
        <button>Ver detalles</button>
    </div>
    )
}

export default Item