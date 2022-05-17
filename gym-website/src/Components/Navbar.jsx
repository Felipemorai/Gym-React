import React, {useState} from 'react';
import logo from '../images/logo.png';
import {Link} from 'react-scroll';

function Navbar() {
    const [nav, setnav] = useState(false);

    const changeBackground = () => {
        if (window.scrollY >= 50) {
            setnav(true);
        }
    }
    return (
        <nav>

        </nav>
    );
}

export default Navbar;