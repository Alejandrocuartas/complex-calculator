import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar navbar-light bg-light">
            <form className="container-fluid justify-content-start">
                <Link to="/complex-calculator/converter" className="btn btn-outline-success me-2">Converter</Link>
                <Link to="/complex-calculator/phasoroperator" className="btn btn-outline-success me-2">Phasor Operator</Link>
                <Link to="/complex-calculator/complexoperator" className="btn btn-outline-success me-2">Polar Operator</Link>
                <Link to="/complex-calculator/" className="btn btn-outline-success me-2">Guide</Link>
            </form>
        </nav>
    )
}

export default Navbar;