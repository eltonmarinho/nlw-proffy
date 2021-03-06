import React from 'react'
import whatsAppIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'
import api from '../../Services/api'


export interface Teacher {
    id:number;
    avatar:string;
    bio:string;
    cost:number;
    name:string;
    subject:string;
    whatsapp:string;
}

interface TeacherItemsProps{
    teacher:Teacher;
}

const TeacherItem: React.FC<TeacherItemsProps> = ({teacher}) => {

    function createNewConnection(){
        api.post('connections',{
            user_id: teacher.id,
        })
    }

    return(
        <article className="teacher-item">
                    <header>
                        <img src={teacher.avatar} alt={teacher.name}/>
                        <div>
                            <strong>{teacher.name}</strong>
                            <span>{teacher.subject}</span>
                        </div>
                    </header>
                    <p>
                        {teacher.bio}
                    </p>
                    <footer>
                        <p>
                            Preco
                            <strong>{teacher.cost}</strong>
                        </p>
                        <a target="_blank" onClick={createNewConnection} href={`https://wa.me/${teacher.whatsapp}`}>
                            <img src={whatsAppIcon} alt="whatsapp"/>
                            Entrar em contato
                        </a>
                    </footer>
                </article>
    )
}

export default TeacherItem

