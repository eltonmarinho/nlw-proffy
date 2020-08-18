import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import './styles.css'

import logoImg from '../../assets/images/logo.svg'
import landingImg from '../../assets/images/landing.svg'
import studyIcon from '../../assets/images/icons/study.svg'
import giveCassesIcon from '../../assets/images/icons/give-classes.svg'
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg'
import api from '../../Services/api'

function Landing(){


    const [totalConnections, setTotalConections] = useState(0)
    

    useEffect(() => {
        api.get('connections').then(response =>{
            //const total = response.data.total;
            const {total} = response.data;


            setTotalConections(total)
        })
    }, [])

    return (
    <div id="page-landing">
        <div id="page-landing-content" className="container">
            <div className="logo-container">
                <img src={logoImg} alt="Proffy"/>
                <h2>sua plataforma de estudos online</h2>
            </div>
            <img src={landingImg} alt="Plataforma de estudos" className="hero-image"/>
            <div className="buttons-container">
                <Link to="study" className="study">
                    <img src={studyIcon} alt=""/>
                    Estudar
                </Link>
                <Link to="/give-classes" className="give-classes">
                    <img src={giveCassesIcon} alt=""/>
                    Ensinar
                </Link>
            </div>
            <span className="total-connections">
                total de {totalConnections} conexoes ja realizadas
                <img src={purpleHeartIcon} alt="coracao"/>
            </span>
        </div>
    </div>
    )
}

export default Landing