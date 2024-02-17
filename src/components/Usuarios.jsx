import React from 'react';

export const Usuarios = () => {

    const users = [
        {
            id: 1,
            nombre: 'Usuario 1',
            correo: 'usuario1@example.com',
            contraseña: '1234'
        },
        {
            id: 2,
            nombre: 'Usuario 2',
            correo: 'usuario2@example.com',
            contraseña: '5678'
        }, 
        {
            id: 3,
            nombre: 'Usuario 3',
            correo: 'usuario3@example.com',
            contraseña: '1357'
        }
    ];

  return (
    <>
        <div className='container'>

            <h1>Usuarios</h1>
            
                <table className="table-responsive">
                    <thead>
                        <tr>
                        <th scope="col">id</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Correo</th>
                        <th scope="col">Contraseña</th>
                        </tr>
                    </thead>
                    
                    <tbody>
                        {users.map( (user) =>(
                            <tr key={user.id}> 
                                <td>{user.nombre}</td>
                                <td>{user.correo} </td>
                                <td>{user.contraseña} </td>
                            </tr>
                        ) )}
                    </tbody>

                </table>

        </div>
    </>
  );
}