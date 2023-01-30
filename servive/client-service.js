const listaClientes = () => fetch("https://david-doguito-petshop.vercel.app/").then(respuesta => respuesta.json())

const crearCliente = (nombre,email) =>{
    return fetch("https://david-doguito-petshop.vercel.app/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({nombre,email, id: uuid.v4()})
    })
}

const eliminarCliente = (id) => {
    return fetch(`https://david-doguito-petshop.vercel.app/${id}`, {
        method: "DELETE"
})
}

const detalleCliente = (id) => fetch(`https://david-doguito-petshop.vercel.app/${id}`).then( respuesta => respuesta.json());

const actualizarCliente = (nombre, email, id) => {
    return fetch(`https://david-doguito-petshop.vercel.app/${id}`,{
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({nombre, email})
    })
    .then(respuesta => respuesta)
    .catch(err => console.log(err));
}



export const clientServices = {
    listaClientes,
    crearCliente,
    eliminarCliente,
    detalleCliente,
    actualizarCliente
}