import React from 'react';

export const Eventos = () => {

    const evento = [
        {
            id: 1,
            titulo: 'Evento 1',
            descripcion: '...',
            fecha: "dd/mm/aa",
            lugar: "x"
        },
        {
            id: 2,
            titulo: 'Evento 2',
            descripcion: '...',
            fecha: "dd/mm/aa",
            lugar: "y"
        }, 
        {
            id: 3,
            titulo: 'Evento 3',
            descripcion: '...',
            fecha: "dd/mm/aa",
            lugar: "z"
        }
    
    ];

  return (
    <>
        <div className='container'>

            <h1>Eventos</h1>
            
                <table className="table-responsive">
                    <thead>
                        <tr>
                        <th scope="col">id</th>
                        <th scope="col">Titulo</th>
                        <th scope="col">Descripcion</th>
                        <th scope="col">Fecha</th>
                        <th scope="col">Lugar</th>
                        </tr>
                    </thead>
                    
                    <tbody>
                        {evento.map( (event) =>(
                            <tr key={event.id}> 
                                <td>{event.titulo}</td>
                                <td>{event.descripcion} </td>
                                <td>{event.fecha} </td>
                                <td>{event.lugar} </td>
                            </tr>
                        ) )}
                    </tbody>

                </table>

        </div>
    </>
  );
}