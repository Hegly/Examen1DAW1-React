import React from 'react'
import { Link } from 'react-router-dom'

export const NavBar = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">Jardín Botánico</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/" className="nav-link active">Home</Link>
                </li>
                <li className="nav-item">
                    <Link to="/usuarios" className="nav-link">Usuarios</Link>
                </li>
                <li className="nav-item">
                    <Link to="/plantas" className="nav-link">Plantas</Link>
                </li>
                <li className="nav-item">
                    <Link to="/eventos" className="nav-link">Eventos</Link>
                </li>
            </ul>
        </div>
        </div>
    </nav>
    </>
  )
}
