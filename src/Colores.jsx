import { useState, useEffect } from 'react'
import Formulario from "./Formulario"
import Item from "./Item"

function Colores(){

    let [colores,setColores] = useState([])

    useEffect(() => {
        fetch("https://api-colores-mongodb-er8c.onrender.com")
        .then(respuesta => respuesta.json())
        .then(colores => setColores(colores))
    }, [])

    function crearColor(color){
        setColores([...colores,color]);
    }

    function borrarColor(id){
        setColores(colores.filter( color => color.id != id))
    }

    return (
        <>
            <Formulario crearColor={crearColor} />
            <ul>
                { colores.map( ({id,r,g,b}) => <Item 
                                                    key={id} 
                                                    id={id}
                                                    r={r} 
                                                    g={g} 
                                                    b={b} 
                                                    borrarColor={borrarColor}
                                                /> ) }
            </ul>
        </>
    )
}

export default Colores