import style from './form.module.css';

import { useState } from 'react';

import * as emailjs from 'emailjs-com'

import { useTranslation } from 'react-i18next';

const initialState = {
    name: '',
    lastname: '',
    email: '',
    message: ''
}

const Form = () => {
    const [state, setState] = useState(initialState)
    const { t } = useTranslation('common');

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

        emailjs.send('service_1gf94ur', 'template_u2hmtyi', templateParams, 'FPbuYfbX5c3SuXNvp')
            .then(
                result => alert('Correo enviado correctamente'),
                error => alert(`Ocurrio un error, intente nuevamente - ${error}`)
            )

        setState(initialState)
    }

    const formInputs = [
        {
            id: "name",
            name: "name",
            type: 'text'
        }, {
            id: "lastname",
            name: "lastname",
            type: 'text'
        }, {
            id: "email",
            name: "email",
            type: 'text'
        }, {
            id: "message",
            name: "message",
            type: 'textarea'
        }
    ]

    return (
        <form className={style.formContainer} onSubmit={sendMessage} >
            <h2>{t('contact.title')}</h2>

            {formInputs.map((input) => (
                <div key={input.id}>
                    <label htmlFor={input.name}>
                        {t(`contact.form.${input.id}`)}
                    </label>

                    {input.type === 'text'
                        ? <input
                            className={style[input.name]}
                            placeholder={t(`contact.form.${input.name}_placeholder`)}
                            name={input.name}
                            value={state[input.name]}
                            onChange={handleChange}
                        />
                        : <textarea
                            className={style.message}
                            placeholder={t('contact.form.message_placeholder')}
                            name='message' value={state.message}
                            onChange={handleChange}
                        />}
                </div>
            ))}

            {/* <div>
                
                <label htmlFor='message'>{t(`contact.form.message`)}</label>
                <textarea
                    className={style.message}
                    placeholder={t('contact.form.message_placeholder')}
                    name='message' value={state.message}
                    onChange={handleChange}
                />
            </div> */}

            <button type='submit' disabled={!state.name || !state.lastname || !state.email || !state.message}>{t('contact.form.submit')}</button>
        </form>
    )
}

export default Form;

