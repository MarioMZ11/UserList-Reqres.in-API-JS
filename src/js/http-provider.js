import regeneratorRuntime from "regenerator-runtime";

const URL_USUARIOS = `https://reqres.in/api/users?page=2`;

const obtenerUsuarios = async() => {

        const resp = await fetch(URL_USUARIOS);
        const {data:usuarios} = await resp.json();

        return usuarios;
}

export {
    obtenerUsuarios
}

