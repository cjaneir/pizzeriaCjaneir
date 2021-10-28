import { useState } from "react"

const Button = () => {

    const [contador, setContador] = useState(1);

    const mas = () => setContador(contador + 1);

    const menos = () => setContador(contador - 1);

    const resetea  = () => setContador (1);

    return (
        <>
        <div>
        <button className = "botonCantidad" onClick={mas}> MAS PIZZA </button>
        <button className = "botonCantidad" onClick={menos}> MENOS PIZZA </button>
        <button className = "botonCantidad" onClick={resetea}> RESETEAR </button>
        </div>
        <h3>
            SU PEDIDO = {contador} PIZZA/S
        </h3>
        </>
    )
}

export default Button
