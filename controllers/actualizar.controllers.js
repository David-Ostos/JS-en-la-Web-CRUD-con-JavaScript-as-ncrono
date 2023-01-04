import { clientServices } from "../servive/client-service.js";

const formulario = document.querySelector("[data-form]");

const obtenerInformacion = () => {
    const url = new URL(window.location);
    const id =url.searchParams.get("id");

    if (id == null) {
        window.location.href= "../screens/error.html"
    }
        
    const nombre = document.querySelector("[data-nombre]");
    const email = document.querySelector("[data-email]");

    clientServices.detalleCliente(id).then( perfil => {
        nombre.value = perfil.nombre;
        email.value = perfil.email;
    })
};

formulario.addEventListener("submit" , (evento) =>{
    evento.preventDefault();
    const url = new URL(window.location);
    const id = url.searchParams.get("id");
    console.log(id);
    const nombre = document.querySelector("[data-nombre]").value;
    const email = document.querySelector("[data-email]").value;
    console.log(email, " - ", nombre);
    clientServices.actualizarCliente(nombre,email,id).then(()=> {
        window.location.href = "/screens/edicion_concluida.html" 
    });
    
});

const btnEdit = document.querySelector("button")
btnEdit.addEventListener("click", () => console.log("click"));
obtenerInformacion();