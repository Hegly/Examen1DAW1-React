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
            
                <table className="table table-warning table-striped">
                    <thead>
                        <tr>
                        <th scope="col" className="border border-secondary border-2 text-center">id</th>
                        <th scope="col" className="border border-secondary border-2 text-center">Nombre</th>
                        <th scope="col" className="border border-secondary border-2 text-center">Especie</th>
                        <th scope="col" className="border border-secondary border-2 text-center">Descripcion</th>
                        <th scope="col" className="border border-secondary border-2 text-center">Fecha de Plantación</th>
                        <th scope="col" className="border border-secondary border-2 text-center">id_usuarios</th>
                        </tr>
                    </thead>
                    
                    <tbody>
                        {planta.map( (plant) =>(
                            <tr key={plant.id}> 
                                <th scope="row" className="border border-secondary border-2 text-center"></th>
                                <td className="border border-secondary border-2 text-center">{plant.nombre}</td>
                                <td className="border border-secondary border-2 text-center">{plant.especie} </td>
                                <td className="border border-secondary border-2 text-center">{plant.descripcion} </td>
                                <td className="border border-secondary border-2 text-center">{plant.fecha_plantacion} </td>
                                <td className="border border-secondary border-2 text-center">{plant.id_usuarios} </td>
                            </tr>
                        ) )}
                    </tbody>

                </table>

        </div>
    </>
  );
}