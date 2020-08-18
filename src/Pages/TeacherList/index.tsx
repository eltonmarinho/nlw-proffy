import React, { useState, FormEvent } from 'react'
import PageHeader from '../../Components/PageHeader'
import TeacherItem, { Teacher } from '../../Components/TeacherItem'
import Input from '../../Components/Input'

import './styles.css'
import Select from '../../Components/Select'
import api from '../../Services/api'




function TeacherList(){

    const [teachers, setTeachers] = useState([])
    
    const [subject, setSubject] = useState('')
    const [week_day, setWeekDay] = useState('')
    const [time, setTime] = useState('')


    async function searchTeacher(e:FormEvent){
        e.preventDefault()


        const response = await api.get('Classes', {
            params: { 
                subject,
                week_day,
                time,
            }
        })

        setTeachers(response.data);
        
    }

    return (
        <div id="page-teacher-list" className=" container">
            <PageHeader title="These are the Teachers available">
                <form id="search-teachers" onSubmit={searchTeacher}>
                <Select 
                    name="subject" 
                    label="discipline"
                    value={subject}
                    onChange={(e) => { setSubject(e.target.value)}}
                    options={[
                        {value:'Artes', label:'Artes'},
                        {value:'Biologia', label:'Biologia'},
                        {value:'Matematica', label:'Matematica'},
                        {value:'Fisica', label:'Fisica'},
                        {value:'Geografia', label:'Geografia'},
                        {value:'Historia', label:'Historia'},
                        {value:'Ciencias', label:'Artes'},
                    ]} 
                    />
                    <Select 
                    name="week_day" 
                    label="Day of the week"
                    value={week_day}
                    onChange={(e) => { setWeekDay(e.target.value)}}
                    options={[
                        {value:'0', label:'Segunda-feira'},
                        {value:'1', label:'Terça-feira'},
                        {value:'2', label:'Quarta-feira'},
                        {value:'3', label:'Quinta-Feira'},
                        {value:'4', label:'Sexta-feira'},
                        {value:'5', label:'Sabado'},
                        {value:'6', label:'Domingo'},
                    ]} 
                    />
                    <Input 
                    type="time" 
                    name="time" 
                    label="time"
                    value={time}
                    onChange={(e) => { setTime(e.target.value)}}
                     />

                     <button type="submit">Buscar</button>
                    
                </form>
            </PageHeader>
            
            <main>
                {teachers.map((teacher: Teacher) =>{
                    return <TeacherItem key={teacher.id} teacher={teacher} />
                })}
            </main>
        </div>
    )
}

export default TeacherList