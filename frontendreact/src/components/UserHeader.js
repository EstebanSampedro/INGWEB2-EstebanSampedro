import React, {Fragment, useEffect, useState} from "react";
import {useNavigate, Link} from "react-router-dom";

export default function UserHeader(){
    const navigate = useNavigate();

    const [username, setUserName] = useState("");

    useEffect(() => {
        setUserName(localStorage.getItem("loggedEmail"));
    }, []); 

    const logout = (e) => {
        e.preventDefault();
        localStorage.removeItem("loggedEmail");
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
                                Welcome <span className="sr-only"></span>
                                {username}
                            </a>
                        </li>
                        <li className="nav-item">
                            <Link to="/userarticle" className="nav-link">
                                Añadir Articulo
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/mynews" className="nav-link">
                                Noticias
                            </Link>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-sm-0">
                        <button
                            className="btn btn-outline-success my-2 my-sm-0"
                            type="submit"
                            onClick={(e) => logout(e)}
                            >
                                Logout
                            </button>
                    </form>
                </div>
            </nav>
        </Fragment>
    ); 
}