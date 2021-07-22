import * as CRUD from "./js/crud-provider";
import {init} from './js/usuarios-page';
import regeneratorRuntime from "regenerator-runtime";
import './styles.css';

init();

//Obtener usuario
CRUD.getUsuario(2).then(console.log);

//Crear Usuario
CRUD.crearUsuario({
    nombre: 'Mario',
    job: 'Marinero'
}).then(console.log);

//Actualizar Usuario
CRUD.actualizarUsuario(1, {
    name: 'Mario',
    job : 'Developer'
}).then(console.log)

//Eliminar Usuario
CRUD.borrarUsuario(1).then(console.log);