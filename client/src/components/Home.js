import React from 'react'
import {Link} from 'react-router-dom'
import IntroModule from './IntroModule'
import Slider_1 from '../Slider_1.jpg'
import Slider_2 from '../Slider_2.jpg'
import Slider_3 from '../Slider_3.jpg'
import ArrowRight from '../ArrowRight.svg'
import ArrowLeft from '../ArrowLeft.svg'
import Gastro from '../Gastro.jpg'
import Needy from '../Needy.jpg'
import Donator from '../Donator.jpg'
// import Heart from '../Heart.jpg'

const Home = () => {
    return (
        <div className="container">
            <IntroModule 
                subheading= "A social Project to enrich our society"
                heading= {<> Yes, we care. <br/> What about you? </> } />
            <div className="Brand-Text">
                <h2>Together we are better. <br/>Let's enrich social life.</h2>
                <p>Fate is not always kind. Some of us have to face difficulties in their lives which are sometimes hart to overcome. Therefore not all of us are able to participate in social life due to low income levels or other challenges. 
                   <br/>A small gesture of kindness can help in multiple ways. With a small donation a meal can be shared.</p>
            </div>

            <div className="Target-Groups">
                <div className="Target-Group-1">
                    <Link to="/gastro">
                        <img src={Gastro} alt="Woman in backer shop"/>
                        <h3 className="Title-Group-1">Gastro</h3>
                        <button className="btn-1"> Mehr erfahren</button>
                    </Link>
                </div>
                <div className="Target-Group-2">
                    <Link to="/donator">
                        <img src={Donator} alt="Money in hands"/>
                        <h3 className="Title-Group-2">Donator</h3>
                        <button className="btn-2"> Mehr erfahren</button>
                    </Link>
                </div>
                <div className="Target-Group-3">
                    <Link to="/needy">
                        <img src={Needy} alt="Homeless on the streets"/>
                        <h3 className="Title-Group-3">Needy</h3>
                        <button className="btn-3"> Mehr erfahren</button>
                    </Link>
                </div>
            </div>

            <div className="SEO-Text">
                <h2>Together we are better. <br/>Let's enrich social life.</h2>
                <p>Fate is not always kind. Some of us have to face difficulties in their lives which are sometimes hart to overcome. Therefore not all of us are able to participate in social life due to low income levels or other challenges. 
                   <br/>A small gesture of kindness can help in multiple ways. With a small donation a meal can be shared.</p>
            </div>

            <div className="carousel">
                <button className="carousel__btn carousel__btn--left">
                    <img src={ArrowLeft} alt=""/>
                </button>
                
                <div className="carousel__track-container">
                    <ul className="carousel__track">
                        <li className="carousel__slide">
                            <img className="carousel__image" src={Slider_1} alt=""/>
                        </li>
                        <li className="carousel__slide">
                            <img className="carousel__image" src={Slider_2} alt=""/>
                        </li>
                        <li className="carousel__slide">
                            <img className="carousel__image" src={Slider_3} alt=""/>
                        </li>
                    </ul>
                </div>

                    <button className="carousel__btn carousel__btn--right">
                        <img className="carousel__image" src={ArrowRight} alt=""/>
                    </button>

                <div className="carousel__nav">
                    <button className="carousel__indicators"></button>
                    <button className="carousel__indicators"></button>
                    <button className="carousel__indicators"></button>
                </div>
            </div>


            
        </div>
    )
}


export default Home
