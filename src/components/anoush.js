import React, { Component } from 'react';
import './anoush.css';

function Home (props) {

    const images = ['daddy.png', 'HappyCalz.png', 'lalzdo.png', 'blood.png', 'CptSoup.png']
    const img = images[Math.floor(Math.random() * images.length)]

    return <div id="Anoush">
        <div id="anoush-cage">
            <img id="anoush-face" src={img}/>
        </div>
        <iframe width="0" height="0" src="https://www.youtube.com/embed/OxMSd1-JSts?rel=0&amp;controls=0&amp;showinfo=0&autoplay=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
    </div>
}

export default Home;