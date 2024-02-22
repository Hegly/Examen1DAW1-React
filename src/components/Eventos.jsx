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
            
                <table className="table table-info table-striped">
                    <thead>
                        <tr>
                        <th scope="col" className="border border-secondary border-2 text-center">id</th>
                        <th scope="col" className="border border-secondary border-2 text-center">Titulo</th>
                        <th scope="col" className="border border-secondary border-2 text-center">Descripcion</th>
                        <th scope="col" className="border border-secondary border-2 text-center">Fecha</th>
                        <th scope="col" className="border border-secondary border-2 text-center">Lugar</th>
                        </tr>
                    </thead>
                    
                    <tbody>
                        {evento.map( (event) =>(
                            <tr key={event.id}> 
                                 <th scope="row" className="border border-secondary border-2 text-center"></th>
                                <td className="border border-secondary border-2 text-center">{event.titulo}</td>
                                <td className="border border-secondary border-2 text-center">{event.descripcion} </td>
                                <td className="border border-secondary border-2 text-center">{event.fecha} </td>
                                <td className="border border-secondary border-2 text-center">{event.lugar} </td>
                            </tr>
                        ) )}
                    </tbody>

                </table>

        </div>
    </>
  );
}