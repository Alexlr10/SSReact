import React from 'react'
import Titulo from '../Titulo';

export default function Professor() {

    const titulo = 'Professores';

    const professores = [
        { id: 1, nome: 'Lauro', disciplina: 'Matematica' },
        { id: 2, nome: 'Roberto', disciplina: 'Fisica' },
        { id: 3, nome: 'Ronaldo', disciplina: 'Portugues' },
        { id: 4, nome: 'Rodrigo', disciplina: 'Ingles' },
        { id: 5, nome: 'Alexandre', disciplina: 'Programação' },

    ]

    return (
        <div>
            <h1>
                <Titulo Titulo={titulo} />
            </h1>
           
            <table class="table">
                <thead class="table-light">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Nome</th>
                        <th scope="col">Disciplina</th>

                    </tr>
                </thead>

                {professores.map((prof) => {
                    return (

                        <tbody>
                            <tr>
                                <th scope="row">{prof.id}</th>
                                <td>{prof.nome}</td>
                                <td>{prof.disciplina}</td>

                            </tr>
                        </tbody>

                    )
                })}

            </table>
        </div>


    )
}