import React, {useState, useEffect, FormEvent} from 'react';
import './styles.css';
import PageHeader from '../../Components/PageHeader';
import TeacherItem, { Teacher } from '../../Components/TeacherItem';
import Input from '../../Components/Input';
import Select from '../../Components/Select';
import api from '../../services/api';

const TeacherList = () => {
    const [teachers, setTeachers] = useState([]);
    const [subject, setSubject]   = useState('');
    const [week_day, setWeekDay]  = useState('');
    const [time, setTime]         = useState('');

    async function searchTeachers(e: FormEvent) {
        e.preventDefault();

        const response = await api.get('classes', {
            params: {
                subject,
                week_day,
                time,
            }
        });

        setTeachers(response.data);
    }

    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os proffys disponíveis">
                <form id="search-teachers" onSubmit={searchTeachers}>
                    <Select 
                        name="subject" 
                        label="Matéria"
                        onChange={(e) => {setSubject(e.target.value)}}
                        value={subject}
                        options={[
                            {value: 'Artes', label: 'Artes'},
                            {value: 'Educação Física', label: 'Educação física'},
                            {value: 'Matemática', label: 'Matemática'},
                            {value: 'Ciências', label: 'Ciências'}
                        ]} 
                    />
                    <Select 
                        name="week_day" 
                        label="Dia da semana" 
                        onChange={(e) => {setWeekDay(e.target.value)}}
                        value={week_day}
                        options={[
                            {value: "1", label: "Domingo"},
                            {value: "2", label: "Segunda Feira"},
                            {value: "3", label: "Terça Feira"},
                            {value: "4", label: "Quarta Feira"},
                            {value: "5", label: "Quinta Feira"},
                            {value: "6", label: "Sexta Feira"},
                            {value: "7", label: "Sábado"},
                        ]}/>
                    <Input type="time" name="time" value={time} label="Hora" onChange={(e) => {setTime(e.target.value)}}/>
                    <button className="buttonFilter" type="submit">Buscar</button>
                </form>
            </PageHeader>

            <main>
                {teachers.map((teacher: Teacher) => {
                    return  <TeacherItem key={teacher.id} teacher={teacher}/>
                })}
            </main>
        </div>
    )
}

export default TeacherList;