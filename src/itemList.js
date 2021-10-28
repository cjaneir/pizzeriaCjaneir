import Item from "./item"

const ItemList = ({productos}) => {

   return (
    <div>

      {
        productos.map( (item) => {
            return (
                < Item id={item.id} img={item.img} nombre={item.nombre} />
            )
        })
      }

    </div>

   )
}

export default ItemList

