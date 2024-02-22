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
            
                <table className="table table-success table-striped">
                    <thead>
                        <tr>
                        <th scope="col" className="border border-secondary border-2 text-center">id</th>
                        <th scope="col" className="border border-secondary border-2 text-center">Nombre</th>
                        <th scope="col" className="border border-secondary border-2 text-center">Correo</th>
                        <th scope="col" className="border border-secondary border-2 text-center">Contraseña</th>
                        </tr>
                    </thead>
                    
                    <tbody>
                        {users.map( (user) =>(
                            <tr key={user.id}> 
                                <th scope="row" className="border border-secondary border-2 text-center"></th>
                                <td className="border border-secondary border-2 text-center">{user.nombre}</td>
                                <td className="border border-secondary border-2 text-center">{user.correo} </td>
                                <td className="border border-secondary border-2 text-center">{user.contraseña} </td>
                            </tr>
                        ) )}
                    </tbody>

                </table>

        </div>
    </>
  );
}