import React from 'react'
import PageHeader from '../../Components/PageHeader'
import TeacherItem from '../../Components/TeacherItem'

import './styles.css'

function TeacherList(){
    return (
        <div id="page-teacher-list" className=" container">
            <PageHeader title="These are the Teachers available">
                <form id="search-teachers">
                    <div className="input-block">
                        <label htmlFor="subject">Discipline</label>
                        <input type="text" id="subject"/>
                    </div>
                    <div className="input-block">
                        <label htmlFor="week_day">Day of the week</label>
                        <input type="text" id="week_day"/>
                    </div>
                    <div className="input-block">
                        <label htmlFor="time">Time</label>
                        <input type="text" id="time"/> 
                    </div>
                </form>
            </PageHeader>
            
            <main>
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
            </main>
        </div>
    )
}

export default TeacherList