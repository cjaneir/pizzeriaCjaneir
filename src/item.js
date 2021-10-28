const Item = ({id,nombre,img}) =>{

    return (
        <div className = "articulosCont"  key = {id}>
            <h1 className = "nombresArt" > {nombre} </h1>
            <img className = "imgPizzas" src = {img} alt = {nombre} />
        </div>
    )
}

export default Item
