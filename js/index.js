async function getData(){
    const result = await fetch('https://rickandmortyapi.com/api/character');
    const photos = await result.json();
    console.log(result)
    console.log(photos)
    photos.results.forEach(element => {
        if(element.id <=3){
            const card = document.createRange().createContextualFragment(`
                    <div class="card">  
                       <div class="description">
                           <p>${element.name}</p>
                           <p class="price">${element.species}</p>
                       </div>              
                       <img src="${element.image}" alt="">
                       <ul>
                        <li>${element.gender}</li>
                        <li>${element.origin.name}</li>
                        <li>${element.status}</li>
                        <li>${element.location.name}</li>
                       </ul>
                    </div> 
                `)
                const services_row = document.querySelector('.services-row');
                services_row.append(card)

            }

            // prueba para recorrer de otra manera el array para "pintar"
            // un template html (rotating-text-wrapper) sin SALIR DE LA 
            // FUNCION PRINCIPAL (getData()) Y USANDO LOS DATOS OBTENIDOS  
            // (ELEMENT) POR EL FOREACH PRINCIPAL
        
        for(element.id == 1; element.id <= 1; element.id++){

            const text_animation = document.createRange().createContextualFragment(`
                
                 <div class="rotating-text-wrapper">
                    <h2>Nombre: ${element.name}</h2>
                    <h2>Origen: ${element.origin.name}</h2>
                    <h2>Estatus: ${element.status}</h2>
                  </div>

                `)

            const container = document.querySelector('.container2')
            container.append(text_animation)
        }
    });
}

const btn_enviar = document.getElementById('btn-enviar')

const valida = (e) => {
    e.preventDefault();
    const nombre = document.getElementById('nombre');
    const email = document.getElementById('email');
    const mensaje = document.getElementById('mensaje')

    if(nombre.value == ""){
        alert("El campo nombre no puede estar vacío")
        return false;
    }

    if(email.value == ""){
        alert("El campo email no puede estar vacío")
        return false;
    }

    if(mensaje.value == ""){
        alert("El campo mensaje no puede estar vacío")
        return false;
    }

    if(!email_valido(email.value)){
        alert("El formato de correo no es válido")
        return false;
    }
    nombre.value = "";
    email.value = "";
    mensaje.value = ""
    return true;
}

btn_enviar.addEventListener("click", valida)

const email_valido = email => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

getData()
