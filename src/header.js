import React from 'react';
import {Link} from 'react-router-dom';
const Header = () =>{
    return(

        <>
            <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-success p-3">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <i className="fa fa-shopping-cart fa-lg text-warning"></i> Keep Shopping
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav me-auto mb-2 mb-md-0">
                        <li className="nav-item">
                            <Link className="nav-link active" to="/"><i className="fa fa-home"></i> Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" to="cart"><i className="fa fa-shopping-cart"></i> My Cart</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" to="/myorder"><i className="fa fa-phone"></i> Order List</Link>
                    </li>
                    </ul>
                    </div>
                </div>
            </nav> 
        </>
    )
}
export default Header;