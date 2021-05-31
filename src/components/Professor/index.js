import React from 'react'

export default function Professor(){
   
    const titulo = 'Professores';

    const professores = [
        { nome: 'Lauro' },
        { nome: 'Roberto' },
        { nome: 'Ronaldo' },
        { nome: 'Rodrigo' },
        { nome: 'Alexandre' },
    ]

    return (
        <div>
            <h1>
                {titulo}
            </h1>
            <ul>
                {professores.map((prof) => {
                    return (
                        <li key={prof.nome}>{prof.nome}</li>
                    );
                })}
            </ul>
        </div>


    )
}