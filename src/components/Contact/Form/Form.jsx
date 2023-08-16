import style from './form.module.css';
import { useState } from 'react';
import * as emailjs from 'emailjs-com'

const Form = () => {

    const [state, setState] = useState({
        name: '',
        lastname: '',
        email: '',
        message: ''
    })

    const handleChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    const sendMessage = (e) => {
        e.preventDefault();

        let templateParams = {
            name: `${state.name} ${state.lastname}`,
            email: state.email,
            message_html: state.message,
        }

        emailjs.send(
            'service_1gf94ur',
            'template_u2hmtyi',
                templateParams,
            'FPbuYfbX5c3SuXNvp'
            
        ).then(
          result => {
            alert('Correo enviado correctamente')
          },
          error => {
            alert(`Ocurrio un error, intente nuevamente - ${error}`)
          }
        )

        setState({
            name: '',
            lastname: '',
            email: '',
            message: ''
        })
    }

    return (
        <form className={style.formContainer} onSubmit={sendMessage} >
            <h2>Enviame un email</h2>
            <input className={style.nameInput} placeholder='Name' name='name' value={state.name} onChange={handleChange} />
            <input className={style.lastNameInput} placeholder='Lastname' name='lastname' value={state.lastname} onChange={handleChange}/>
            <input className={style.emailInput} placeholder='Email' name='email' value={state.email} onChange={handleChange} />
            <textarea className={style.messageInput} placeholder='Message' name='message' value={state.message} onChange={handleChange} />
            {(!state.name | !state.lastname | !state.email | !state.message) ? <p>Debe completar todos los campos</p> : null}
            
            <button type='submit' disabled={!state.name | !state.lastname | !state.email | !state.message}>Submit</button>
        </form>
    )
}

export default Form;
    
    