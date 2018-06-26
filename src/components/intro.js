import React, { Component } from 'react';
import '../css/intro.css';

function Intro (props) {

    const handleClick = () => {
        props.history.push('/home')
    }

    return <div className="introPage">
        <div onClick={handleClick} className="introContainer">
            <img className="introLogoTitle" src="img/logoTitle.svg"/>
            <img className="introLogoLeft" src="img/logoLeft.svg"/>
            <img className="introLogoRight" src="img/logoRight.svg"/>
        </div>
    </div>

}

export default Intro;