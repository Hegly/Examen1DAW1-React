import React from 'react';

export const Plantas = () => {

    const planta = [
        {
            id: 1,
            nombre: 'Planta 1',
            especie: 'Especie 1',
            descripcion: '...',
            fecha_plantacion: "dd/mm/aa",
            id_usuarios: ""
        },
        {
            id: 2,
            nombre: 'Planta 2',
            especie: 'Especie 2',
            descripcion: '...',
            fecha_plantacion: "dd/mm/aa",
            id_usuarios: ""
        }, 
        {
            id: 3,
            nombre: 'Planta 3',
            especie: 'Especie 3',
            descripcion: '...',
            fecha_plantacion: "dd/mm/aa",
            id_usuarios: ""
        }
    
    ];

  return (
    <>
        <div className='container'>

            <h1>Plantas</h1>
            
                <table className="table-responsive">
                    <thead>
                        <tr>
                        <th scope="col">id</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Especie</th>
                        <th scope="col">Descripcion</th>
                        <th scope="col">Fecha de Plantación</th>
                        <th scope="col">id_usuarios</th>
                        </tr>
                    </thead>
                    
                    <tbody>
                        {planta.map( (plant) =>(
                            <tr key={plant.id}> 
                                <td>{plant.nombre}</td>
                                <td>{plant.especie} </td>
                                <td>{plant.descripcion} </td>
                                <td>{plant.fecha_plantacion} </td>
                                <td>{plant.id_usuarios} </td>
                            </tr>
                        ) )}
                    </tbody>

                </table>

        </div>
    </>
  );
}