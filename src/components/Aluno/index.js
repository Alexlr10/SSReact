import React from 'react'

export default function Aluno() {

    const titulo = 'Alunos';

    const alunos = [
        { nome: 'Marta' },
        { nome: 'Paula' },
        { nome: 'Laura' },
        { nome: 'Luiza' },
        { nome: 'Lucas' },
        { nome: 'Pedro' },
        { nome: 'Paulo' },
    ]

    return (
        <div>
            <h1>
                {titulo}
            </h1>
            <ul>
                {alunos.map((aluno) => {
                    return (
                        <li key={aluno.nome}>{aluno.nome}</li>
                    );
                })}
            </ul>
        </div>


    )
}