import React from 'react'
import whatsAppIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'

function TeacherItem(){
    return(
        <article className="teacher-item">
                    <header>
                        <img src="https://avatars0.githubusercontent.com/u/7594697?s=460&u=5b5e627879d3217ef5c6753caeead83d1a29646c&v=4" alt="elton marinho"/>
                        <div>
                            <strong>Elton Marinho</strong>
                            <span>JavaScript</span>
                        </div>
                    </header>
                    <p>
                        Enthusiast of the best web development technologies
                        <br /><br />
                        Passionate about expanding and sharing knowledge
                    </p>
                    <footer>
                        <p>
                            Preco
                            <strong>$80</strong>
                        </p>
                        <button type="button">
                            <img src={whatsAppIcon} alt="whatsapp"/>
                            Entrar em contato
                        </button>
                    </footer>
                </article>
    )
}

export default TeacherItem

