import React from "react";
import {useSelector} from "react-redux";
import Logo from "../../assets/img/logo-menu.png"
import {Link} from "react-router-dom";

export const Header = () => {

    const reserveSize = useSelector(state => state.reserve);

    console.log("Recebendo Redux dento do Header/index.js", reserveSize)

    return (
        <nav className="navbar-expand-lg navbar navbar-dark bg-dark">
            <img className="img-fluid logo-cabecalho ml-3" src={Logo} alt=""/>
            <button className="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/reservas">Minhas Reservas Reservas</Link>
                        <span className="text-white">{reserveSize.length} Reservas</span>
                    </li>

                </ul>

            </div>
        </nav>
    )
}