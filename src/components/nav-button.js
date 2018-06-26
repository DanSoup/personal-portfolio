import React, { Component } from 'react';
import '../css/nav-button.css';

function NavButton ({changePage, name}) {

    const handleClick = () => {
        changePage(name)
    }

    return <button onClick={handleClick} className="navButton">
        {name}
    </button>
}

export default NavButton;