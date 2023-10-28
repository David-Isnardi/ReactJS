import ItemCount from "../ItemCount/ItemCount"


const ItemDetail = ({id, name, description, img, price, stock}) => {
    return(
    
    <div key={id}>
    <h1>{name}</h1>
    <img src={img} style={{ width: 500 }} />
    <h2>{description}</h2>
    <h2>${price}</h2>
    <ItemCount stock={stock}/>
    </div>
   
    )
}

export default ItemDetail