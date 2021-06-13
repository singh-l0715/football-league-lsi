import React from 'react'
import { Link } from "react-router-dom"


function NavbarLsi15() {
    return (
        
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
            <a className="navbar-brand" href="http://localhost:3000/">Player Stats</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" 
            data-bs-target="http://localhost:3000/navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <Link to="/" className="nav-link active">Home</Link>
                    </li>

                    <li className="nav-item">
                        <Link to="/about" className="nav-link">About</Link>
                    </li>
                    {/* <li className="nav-item">
                        <Link to="/display_stats/:player" className="nav-link">Player
                        </Link>
                    </li> */}

                    
                </ul>
            </div>
        </div>
    </nav>

    )
}

export default NavbarLsi15
