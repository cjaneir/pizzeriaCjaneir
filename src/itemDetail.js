const ItemDetail = ({product}) => {

    return (
       <div>
          <h3 className = "productDetail"> {product.nombre} </h3>
          <span className = "productDetail"> {product.precio} </span>
          <p className = "productDetail" > {product.id} </p>
       </div>
    )
}

export default ItemDetail






