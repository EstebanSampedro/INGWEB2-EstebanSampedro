import React, {Fragment} from "react";
import {useNavigate, Link} from "react-router-dom";

export default function AdminHeader(){
    const navigate = useNavigate();

    const logout = (e) => {
        e.preventDefault();
        localStorage.removeItem("username");
        navigate("/");
    };

    return(
        <Fragment>
            <nav className="navbar navbar-expand-lg narvar-dark bg-dark">
                <a className="navbar-brand" href="#">
                    Sistema de Gestión Peridístico
                </a>
                {/* <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
                >
                <span className="navbar-toggler-icon"></span>
                </button> */}

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">
                                Bienvenido <span className="sr-only"></span>
                                Admin
                            </a>
                        </li>
                        <li className="nav-item">
                            <Link to="/registrationlist" className="nav-link">
                                Registration Management
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/articlelist" className="nav-link">
                                Article Management
                            </Link>
                        </li>

                    </ul>
                    <form className="form-inline my-2 my-sm-0">
                        <button
                            className="btn btn-outline-success my-2 my-sm-0"
                            type="submit"
                            onClick={(e) => logout(e)}
                            >
                                Cerrar Sesion
                            </button>
                    </form>
                </div>
            </nav>
        </Fragment>
    ); 
}