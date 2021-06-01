import React from 'react'
import Titulo from '../Titulo'

export default function Dashboard() {

    const titulo = 'Dashboard'
    return (
        <div>
            <h1>
                <Titulo Titulo={titulo}/>
            </h1>
           <h1>Dashboard works</h1>
        </div>
    )
}