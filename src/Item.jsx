function Item({id,r,g,b,borrarColor}){
    return <li style={ { backgroundColor : `rgb(${[r,g,b].join(",")})`} }
                onClick={() => {
                    fetch("http://localhost:3000/borrar",{
                    method : "DELETE",
                    body : JSON.stringify({id}),
                    headers : {
                        "Content-type" : "application/json"
                    }
                    })
                    .then(respuesta => respuesta.json())
                    .then(({resultado,error}) => {
                        if(!error && resultado == "ok"){
                            return borrarColor(id)
                        }
                        console.log("..error");
                    })
                } }
            >{ [r,g,b].join(",") }</li>
}

export default Item;