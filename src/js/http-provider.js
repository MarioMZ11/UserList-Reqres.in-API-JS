
    console.log('Hola a todos');

    
// // fetch(URL_API).then( resp => {
    
// //     resp.json().then(data => {
// //         console.log(data)
// //         nombre.innerHTML = data.name;
// //         imagen.src = data.sprites.front_default;
// //         app.append(nombre, imagen);
// //     });

// // });

//         
    
const obtenerPokemon = async () =>{

    const id = Math.floor(Math.random() * (898 - 1));
    const URL_API = `https://pokeapi.co/api/v2/pokemon/${id}/`;

    try{
        const resp = await fetch(URL_API);

        if( !resp.ok ) throw alert('No se pudo realizar la peticion');
        const {name, sprites} = await resp.json();

        return {name, sprites};
    }
    catch(err){
        throw err;
    }
    
}

export {
    obtenerPokemon
}

