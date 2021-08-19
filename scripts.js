
const formulario = document.getElementById("form")
const divContainerPokemon = document.getElementById("container_poke")
let xhr 
let arrayPokemon = []


// const instanciarXHR=()=>{
//     if(window.XMLHttpRequest){
//         return (new XMLHttpRequest());
//     } 
//     else{
//         return (new ActiveXObject("Microsoft.XMLHTTP"));
//     }  
// }


const insertarPokemon=(objPok)=>{


    console.log("entra segunda vez")
    let fragment = document.createDocumentFragment()
    
        let divTargetPokemon = document.createElement("DIV")
        let namePokemon = document.createElement("H2")
        let imgPokemon = document.createElement("IMG")

    
        divTargetPokemon.classList.add("target_pokemon")
        divTargetPokemon.classList.add(objPok.id)
    
        namePokemon.textContent = `#${objPok.id} ${objPok.name}`
        imgPokemon.setAttribute("SRC", objPok.img)
    
        divTargetPokemon.appendChild(namePokemon)
        divTargetPokemon.appendChild(imgPokemon)
    
        fragment.appendChild(divTargetPokemon)
    

        divContainerPokemon.appendChild(fragment)
    // console.log(objPok.name)
    // if(divContainerPokemon.children[0]){

    //     let first = divContainerPokemon.firstElementChild;
    //     while (first) {
    //         first.remove();
    //         first = divContainerPokemon.firstElementChild;
    //     }
    // }
    
    // arrayPok.sort((a,b)=>a.id - b.id)
    // console.log(arrayPokemon)

    // for(let pokem of arrayPokemon){
    //     console.log("entra 3ra vez")
        // divTargetPokemon = document.createElement('DIV')
        // divTargetPokemon.classList.add("target_pokemon")

        // namePokemon = document.createElement('H2')

        // imgPokemon = document.createElement('IMG')


        // namePokemon.textContent = objPok.name + " #"+objPok.id
        // divTargetPokemon.appendChild(namePokemon)

        // imgPokemon.setAttribute("src", objPok.img)
        // divTargetPokemon.appendChild(imgPokemon)
        
        // fragment.appendChild(divTargetPokemon)
    // }


    // divContainerPokemon.appendChild(fragment)

}

const insertarHtml=()=>{
    
       
}


const cargarPokemones=()=>{
    
    xhr.open('GET', "https://pokeapi.co/api/v2/pokemon?limit=1118&offset=0")

    xhr.addEventListener('load', (data)=>{
        let pokemonesEnlace = JSON.parse(data.target.response)
       
        let pokemonResults = pokemonesEnlace.results
        //para usar for of es necesario tener un array a recorrer
        //no puede recibir un objeto
        for (const poke of pokemonResults) {
            xhr = new XMLHttpRequest()

            xhr.open('GET', poke.url)

            xhr.addEventListener('load', (data)=>{
                let datosPokemon = JSON.parse(data.target.response)

                let poke={
                    name: datosPokemon.name,
                    img: datosPokemon.sprites.front_default,
                    id: datosPokemon.id
                }

                insertarPokemon(poke)
                
            })

            xhr.send()
        }
        
        
    })
    xhr.send()
}




    xhr = new XMLHttpRequest()
    cargarPokemones();



