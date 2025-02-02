import Github from './../../assets/contact/Github.png'
import LinkedIn from './../../assets/contact/LinkedIn.png'
import Phone from './../../assets/contact/Phone.svg'

export const allContacts = [
    {
        link: "https://www.linkedin.com/in/leilaaylensalguero",
        image: LinkedIn,
        content: "leilaaylensalguero",
        classname: "linkLinkedIn"
    }, {
        link: "https://github.com/LeyAylen6",
        image: Github,
        content: "LeyAylen6",
        classname: "linkGithub"
    }, {
        link: "https://www.linkedin.com/in/leilaaylensalguero",
        image: Phone,
        content: "(+54) 11-5807-9279",
        classname: "linkPhone"
    }
]

export const initialState = {
    name: '',
    lastname: '',
    email: '',
    message: ''
}

export const formInputs = [
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