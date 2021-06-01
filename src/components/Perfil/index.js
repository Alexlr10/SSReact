import React from 'react'
import Titulo from '../Titulo';

export default function Perfil() {

    const titulo = 'Perfil';

    return (
        <div>
            <h1>
                <Titulo Titulo={titulo} />
            </h1>
            <h1>perfil</h1>
        </div>
    )
}