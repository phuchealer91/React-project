import React, { Component } from 'react';
import {NavLink} from "react-router-dom";
import '../Navbar/Nav.css'
class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-md navbar-dark  bg-dark">
                    <a className="navbar-brand" href="a.html">PHUC TAI</a>
                    <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="collapsibleNavId">
                        <ul className="navs">
                            {/* <li className="nav-item">
                                <a className="nav-link" href="">Trang Chủ</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="">Sản Phẩm</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="">Liên Hệ</a>
                            </li> */}
                            <li className="nav-item">
                               <NavLink to="/" activeClassName="active"  activeStyle={{
                                    color: "white"
                                }}>Trang Chủ</NavLink> 
                            </li>
                            <li className="nav-item">
                               <NavLink to="/san-pham" activeClassName="active">Sản Phẩm</NavLink> 
                            </li>
                            <li className="nav-item">
                             <NavLink to="/lien-he" activeClassName="active">Liên Hệ</NavLink>   
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Navbar;