import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import '../styles/Footer.css';

function Footer() {

    return (

        <Router>
            <footer>
                <div id="caixa-footer">
                    <nav>
                        <Link to="/" className="link-footer">Sobre</Link>
                    </nav>
                </div>
            </footer>
        </Router>
    )
}

export default Footer;