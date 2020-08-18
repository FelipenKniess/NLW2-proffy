import React, {useState, FormEvent} from 'react';
import PageHeader from '../../Components/PageHeader';
import './styles.css';
import {useHistory} from 'react-router-dom';

import Input from '../../Components/Input';
import TextArea from '../../Components/Textarea';
import Select from '../../Components/Select';

import warningIcon from '../../assets/images/icons/warning.svg';
import api from '../../services/api';

interface ScheduleItems {
    week_day: number,
    from: string,
    to: string
}

const TeacherForm = () => {
    const [name, setName] = useState('');
    const [avatar, setAvatar] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [bio, setBio] = useState('');
    const [subject, setSubject] = useState('');
    const [cost, setCost] = useState('');

    const [scheduleItems, setScheduleItems] = useState<ScheduleItems[]>([
        {week_day: 1, from: '', to: ''}
    ]);

    function addNewScheduleItem(){
        setScheduleItems([
            ...scheduleItems,
            {week_day: 1, from: '', to: ''}
        ]);
    }
    
    const history = useHistory();
    
    function handleCreateClass(e: FormEvent){
        e.preventDefault();

        api.post('classes', {
            name,
            avatar,
            whatsapp,
            bio,
            subject,
            cost: Number(cost),
            schedule: scheduleItems  
        }).then(() => {
            alert('Cadastro Realizado');
            history.push('/');
        }).catch((err) => {
            console.log(err);
            alert('Erro no cadastro');
        })
    }

    function setScheduleItemValue(position: number, field:string, value: string){
        const updateScheduleItems = scheduleItems.map((scheduleItem, index) => {
            if(index === position) {
                return { ... scheduleItem, [field]: value};
            }

            return scheduleItem;
        });

        setScheduleItems(updateScheduleItems);
    }

    return (
        <div id="page-teacher-form" className="container">
                <PageHeader 
                title="Que incrível que você quer dar aulas"
                description="O primeiro passo é preencher o formulário de inscrição"
                />
                <main>
                    <form onSubmit={handleCreateClass}>
                        <fieldset>
                            <legend>Seus dados</legend>
                            <Input name="name" value={name} onChange={(e) => setName(e.target.value) } label="Nome completo"/>
                            <Input name="avatar" value={avatar} onChange={(e) => setAvatar(e.target.value) } label="Avatar"/>
                            <Input name="whatsapp" value={whatsapp} onChange={(e) => setWhatsapp(e.target.value)}label="Whatsapp"/>
                            <TextArea name="bio" value={bio}  onChange={(e) => setBio(e.target.value) } label="Biografia"/>
                        </fieldset>

                        <fieldset>
                            <legend>Sobre a aula</legend>
                            <Select 
                                name="subject" 
                                label="Matéria"
                                value={subject}
                                onChange={(e) => setSubject(e.target.value) }
                                options={[
                                    {value: 'Artes', label: 'Artes'},
                                    {value: 'Educação Física', label: 'Educação física'},
                                    {value: 'Matemática', label: 'Matemática'},
                                    {value: 'Ciências', label: 'Ciências'}
                                ]} 
                                />
                            <Input name="cost" value={cost} onChange={(e) => setCost(e.target.value) } label="Custo da sua hora por aula"/>
                        </fieldset>
                        
                        <fieldset>
                            <legend>Horários disponíveis
                                <button type="button" onClick={addNewScheduleItem}>
                                    + Novo horário
                                </button>
                            </legend>
                            {
                                scheduleItems.map((scheduleItem, index) => {
                                    return (
                                        <div key={index} className="schedule-item">
                                            <Select 
                                                name="week_day" 
                                                label="Dia da semana" 
                                                value={scheduleItem.week_day}
                                                onChange={e => setScheduleItemValue(index, 'week_day', e.target.value)}
                                                options={[
                                                    {value: "1", label: "Domingo"},
                                                    {value: "2", label: "Segunda Feira"},
                                                    {value: "3", label: "Terça Feira"},
                                                    {value: "4", label: "Quarta Feira"},
                                                    {value: "5", label: "Quinta Feira"},
                                                    {value: "6", label: "Sexta Feira"},     
                                                    {value: "7", label: "Sábado"},
                                                ]}
                                                />
                                            <Input name="from"
                                                   label="Das" 
                                                   type="time"  
                                                   onChange={e => setScheduleItemValue(index, 'from', e.target.value)} 
                                            />
                                            <Input name="to"
                                                   label="Até"
                                                   type="time"  
                                                   onChange={e => setScheduleItemValue(index, 'to', e.target.value)} />        
                                        </div>
                                    )
                                }) 
                            }
                        </fieldset>
                        <footer>
                            <p>
                                <img src={warningIcon} alt="Aviso importante"/>
                                Importante! <br />
                                Preecha todos os dados
                            </p>
                            <button type="submit">
                                Salvar o cadastro
                            </button>
                        </footer>
                    </form>
                </main>
        </div>
    )
}

export default TeacherForm;