import { useEffect, useState } from "react";
import ItemDetail from "./itemDetail"


const ItemDetailContainer = () => {

        const [product, setProduct] = useState([]);{

        useEffect(() => {
            const producto_detail = [
                {id:1, nombre: "Buenos Aires", precio:1500 }
            ]

            setTimeout(() => {
            setProduct(producto_detail);
        }, 2000)

    }, [])

    return(
        <>
           <div className = "product">
               <ItemDetail product = {product} />
           </div>
        </>
            
    )
  } 
}
export default ItemDetailContainer







