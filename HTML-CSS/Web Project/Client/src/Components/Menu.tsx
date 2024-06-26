import React from 'react'
import { Link } from 'react-router-dom'
function Menu() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <Link className="nav-link" to={"/"}>Home</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to={"province"}>Province</Link>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
  )
}

export default Menu