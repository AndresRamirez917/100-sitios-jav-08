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
        }for(element.id == 1; element.id <= 1; element.id++){

            const text_animation = document.createRange().createContextualFragment(`
                
                 <div class="rotating-text-wrapper">
                    <h2>${element.name}</h2>
                    <h2>${element.origin.name}</h2>
                    <h2>${element.status}</h2>
                  </div>

                `)

            const container = document.querySelector('.container2')
            container.append(text_animation)
        }
    });
}

getData()