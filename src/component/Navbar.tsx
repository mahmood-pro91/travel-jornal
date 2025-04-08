

import logo from "../assets/react.svg"
import './Navbar.css'

export default function Navbar(){

    return (
        <>
            <header className="head">
                <nav className="nav">
                    <img className="logo" src={logo} alt="react-logo" />
                    <span>ReactFacts</span>
                </nav>
            </header>
        </>
    )
}