import React, { useState, FormEvent } from 'react'
import PageHeader from '../../Components/PageHeader'
import './styles.css'
import Input from '../../Components/Input'
import warningIcon from '../../assets/images/icons/warning.svg'
//import Textarea from '../../Components/TextArea'
import Select from '../../Components/Select'
import api from '../../Services/api'
import { useHistory } from 'react-router-dom'

function TeacherForm(){

    const history = useHistory()

    const [name, setName] = useState('')
    const [avatar, setAvatar] = useState('')
    const [whatsapp, setWhatsapp] = useState('')
    const [bio , setBio] = useState('')

    const [subject , setSubject] = useState('')
    const [cost , setCost] = useState('')

    const [scheduleItens, setScheduleItens] = useState([
        {week_day:0, from:'', to:'' }
    ])

    

    function addNewScheduleItem(){
        setScheduleItens([...scheduleItens, { week_day:0, from:'', to:'' }])        
    }

    function setScheduleItenValue(position:number, field:string, value: string){
        const updatedScheduleItems = scheduleItens.map((scheduleItem, index) =>{
            if(index === position){
                return { ...scheduleItem, [field]: value }
            }

            return scheduleItem
        })
        setScheduleItens(updatedScheduleItems);//linha muito importante(era console.log)
        
    }

    

    function  handleCreateClass(e:FormEvent){

        e.preventDefault()

        api.post('Classes', {
            name, 
            avatar,
            whatsapp,
            bio,
            subject,
            cost: Number(cost),
            schedule: scheduleItens
        }).then(()=> {
            alert('register completed successfully')

            history.push('/')
        }).catch(()=>{
            alert('Error: register cannot be saved')
        })
        
    }


    return (
        <div id="page-teacher-form" className="container">
            <PageHeader title="Que incrivel que voce quer dar aulas"
            description="The first step is to fill the subscription form"
            />

            <main>
                <form onSubmit={handleCreateClass}>
                <fieldset>
                    <legend>Seus dados</legend>
                    <Input name="name" label="fullname" value={name} onChange={(e) => { setName(e.target.value)}} />
                    <Input name="avatar" label="avatar" value={avatar} onChange={(e) => { setAvatar(e.target.value)}}/>
                    <Input name="whatsapp" label="whatsapp" value={whatsapp} onChange={(e) => { setWhatsapp(e.target.value)}}/>
                    <Input name="bio" label="biography" value={bio} onChange={(e) => { setBio(e.target.value)}}/>
                    
                    
                </fieldset>
                <fieldset>
                    <legend>Sobre a aula</legend>
                    <Select 
                    name="subject" 
                    label="discipline"
                    value={subject}
                    onChange = {(e)=>{ setSubject(e.target.value)}}
                    options={[
                        {value:'Artes', label:'Artes'},
                        {value:'Biologia', label:'Biologia'},
                        {value:'Matematica', label:'Matematica'},
                        {value:'Fisica', label:'Fisica'},
                        {value:'Geografia', label:'Geografia'},
                        {value:'Historia', label:'Historia'},
                        {value:'Ciencias', label:'Ciencias'},
                    ]} 
                    />
                    <Input 
                    value={cost}
                    onChange = {(e)=>{ setCost(e.target.value)}} 
                    name="cost" 
                    label="custo da hora/aula" />
                </fieldset>
                <fieldset>
                    <legend>
                        Horarios Disponiveis
                        <button type="button" onClick={addNewScheduleItem}>
                        + Novo Horario
                        </button>
                    </legend>

                    {scheduleItens.map((scheduleItem, index) => {
                        return (
                            <div key={scheduleItem.week_day} className="schedule-item">
                                <Select 
                                name="subject" 
                                label="discipline"
                                value={scheduleItem.week_day}
                                onChange={e => setScheduleItenValue(index, 'week_day', e.target.value)}
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
                                name="from" 
                                label="from" 
                                type="time"
                                value={scheduleItem.from}
                                onChange={e => setScheduleItenValue(index, 'from', e.target.value)} />
                                <Input 
                                name="to" 
                                label="to" 
                                type="time"
                                value={scheduleItem.to}
                                onChange={e => setScheduleItenValue(index, 'to', e.target.value)} />
                            </div>
                        )
                    })}
                    
                </fieldset>
                <footer>
                    <img src={warningIcon} alt="Aviso importante"/>
                        importante!<br />
                        Preencha todos os dados
                    <button type="submit">
                        Salvar o cadastro
                    </button>
                </footer>
                </form>
            </main>
        </div>

    )
}

export default TeacherForm