import { obtenerPokemon} from "./http-provider";
import regeneratorRuntime from "regenerator-runtime";
const body = document.body;

let btnPokemon;
let pokedexImagen;
    let pokedexInfo;
    let nombrePokemon;
    let imagenPokemon;
const crearPokedex = () =>{
    const html = `
            
            <div class="pokedex">

                <div class="imagen">
                    
                </div>

                <div class="info-poke">
                </div>
                <button class="boton"> <span>Pokémon</span></button>
            </div>
    `;

    const divApp = document.createElement('div');
    divApp.className = "app text-center";
    divApp.innerHTML = html;
    body.append(divApp);
}

const eventos = async () => {
    pokedexImagen = document.querySelector('.imagen');
    pokedexInfo = document.querySelector('.info-poke');
    nombrePokemon = document.createElement('span');
    imagenPokemon = document.createElement('img');

    btnPokemon = document.querySelector('button');

    let opc = 0;

    btnPokemon.addEventListener('click', async( )=>{ 

        if(opc === 0){
           dibujarPokemon( await obtenerPokemon()); 
           opc = 1
        } else{
            pokedexImagen.innerHTML = '';
            nombrePokemon.innerHTML = '';
            dibujarPokemon( await obtenerPokemon())
            opc = 0
        }
    });

}

const dibujarPokemon = (pokemon) => {
    
    
    imagenPokemon.className = "img-pokemon";
    nombrePokemon.className = "nombre-pokemon";

    nombrePokemon.innerHTML = ' ';
    imagenPokemon.src = ' ';

    nombrePokemon.innerHTML = `Pokemon <br> ${pokemon.name}`;
    imagenPokemon.src = pokemon.sprites.front_default;
    pokedexImagen.append(imagenPokemon);
    pokedexInfo.append(nombrePokemon);
    
}

export const init = () => {
    crearPokedex();
    eventos();
}