import React from 'react';
import {useState} from 'react';

export const Usuarios = () => {

    const [nombre, setNombre] = useState();

    const [correo, setCorreo] = useState();

    const [contrasena, setContrasena] = useState();

    const nombreHandler = (event) =>{

        const { name, value } = event.target;
        setNombre(value);

    }

    const correoHandler = (event) =>{

        const { name, value } = event.target;
        setCorreo(value);

    }

    const contrasenaHandler = (event) =>{

        const { name, value } = event.target;
        setContrasena(value);

    }

    const submitHandler=()=>{
        event.preventDefault();
        const dataSend = {
            nombre : nombre,
            correo : correo,
            contraseña : contrasena
        }
    }

    return (
    <>
        <div className='container mt-5'>
            <form onSubmit={submitHandler}>
                <fieldset>
                    <legend>Registro de Usuarios</legend>

                    <div class="form-group row">
                            <label for="staticNombre" class="col-sm-2 col-form-label">Nombre</label>
                        <div class="col-sm-10">
                            <input type="nombre" class="form-control" id="exampleInputNombre1" name="nombre" placeholder="Escriba el nombre del usuario" onChange={nombreHandler}
                            />
                        </div>
                        </div>

                        <div class="form-group row mt-3">
                            <label for="staticCorreo" class="col-sm-2 col-form-label">Correo</label>
                        <div class="col-sm-10">
                            <input type="correo" class="form-control" id="exampleInputCorreo1" name="correo" placeholder="Escriba el correo del usuario" onChange={correoHandler}
                            />
                        </div>
                        </div>

                        <div class="form-group row mt-3">
                            <label for="staticContrasena" class="col-sm-2 col-form-label">Contraseña</label>
                        <div class="col-sm-10">
                            <input type="contrasena" class="form-control" id="exampleInputContrasena1" name="contrasena" placeholder="Escriba la contraseña del usuario" onChange={contrasenaHandler}
                            />
                        </div>
                        </div>

                        <button type="submit" class="btn btn-primary w-100">Enviar</button>
                </fieldset>
            </form>
        </div>
    </>
    )
}