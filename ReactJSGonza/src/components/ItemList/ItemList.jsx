import Item from "../Item/Item"

const ItmelList = ({products}) => {
    return(
        <div>
        {
            products.map(prod => {
                return(
                    <Item key={prod.id} {...prod} />
                )
            })
        }
    </div>
    )
}

export default ItmelList