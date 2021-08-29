import React, {useEffect} from 'react'
import Intro_Gastro from './Imgs/Cat/Intro_Gastro.jpg'
import FAQGastro from './FAQs/FAQ-Gastro'
import {Link} from 'react-router-dom'
import Map from "./Imgs/Home/Map.jpg"

const Gastro = () => {
    
    useEffect(()=>{
        window.scrollTo(0,0)
    })

    return (
     <div className="container">
        <div className="Intro-Module">
            <img src={Intro_Gastro} alt="Man looking into the streets"/>
            <div className="Text-Element">
                <h1 className="center">Gastronomen</h1> 
                <p className="italic">"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut.cd"</p>
            </div>  
        </div>

        <div className="Brand-Text">
            <h3>Together we are better. <br/>Let's enrich social life.</h3>
            <p>Fate is not always kind. Some of us have to face difficulties in their lives which are sometimes hart to overcome. Therefore not all of us are able to participate in social life due to low income levels or other challenges. 
               <br/>A small gesture of kindness can help in multiple ways. With a small donation a meal can be shared.</p>
        </div>

        <FAQGastro/>

        <Link to="/map">
            <div className="Map-Element">    
                <div className="Intro-Module">
                    <img src={Map} alt="map"/>
                    <div className="Text-Element story ">
                        <h1 className="center"> Find all participating partners here.</h1> 
                    </div>
                    <button  className="mapBtn">To the locations ❯</button> 
                </div>
            </div>
        </Link>
        
    </div>    
    )
}

export default Gastro