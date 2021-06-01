import React from 'react';
import { Link } from 'react-router-dom';

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
                        <li class="nav-item">
                            <Link className="nav-link" activeClassName='is-active' to="/perfil">Perfil</Link>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle"  id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown link
          </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <li><a class="dropdown-item" >Action</a></li>
                                <li><a class="dropdown-item" >Another action</a></li>
                                <li><a class="dropdown-item" >Something else here</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}