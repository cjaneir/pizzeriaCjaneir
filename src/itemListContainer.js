import { useEffect, useState } from "react";
import articulos from "./productos.json"
import ItemList from "./itemList"

const ItemlistContainer = (props) => {

        const [productos, setProductos] = useState([]);{

        useEffect(() => {
            setTimeout(() => {
            setProductos(articulos);
        }, 2000);

    }, [])

    return(
        <>
            <p id= "bienvenido"> - BIENVENIDO/A - HAGA SU PEDIDO - </p>
        {
            productos.length === 0 ?
              <p className = "loadingText">LOADING WORLD PIZZA...</p> :
            < ItemList productos = {productos} />
        }
        </>
    )
  }
}


export default ItemlistContainer
