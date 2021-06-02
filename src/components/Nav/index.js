import React from 'react';
import { Link } from 'react-router-dom';
import DropdownButton from 'react-bootstrap/DropdownButton'
//import { Dropdown } from 'bootstrap';
import Dropdown from 'react-bootstrap/Dropdown'

export default function Nav() {

    return (

        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <Link className="navbar-brand" to="/Dashboard">SmartSchool</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarNavDropdown">

                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <Link className="nav-link" activeClassName='active' to="/alunos" >Alunos</Link>
                        </li>
                        <li class="nav-item">
                            <Link className="nav-link" activeClassName='is-active' to="/professores">Professores</Link>
                        </li>
                        
                    </ul>

                    <ul class="navbar-nav">
                        <DropdownButton menuAlign="left" variant="secondary" id="dropdown-basic-button" title="Dropdown button">
                            <Dropdown.Item href="/perfil">Perfil</Dropdown.Item>
                            <Dropdown.Item href="/dashboard">Sair</Dropdown.Item>
                        </DropdownButton>

                    </ul>

                </div>
            </div>
        </nav >
    )
}