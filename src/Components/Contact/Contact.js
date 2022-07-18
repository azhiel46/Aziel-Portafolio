//Importar Componentes
import React, { useRef, useState } from 'react';
import '../../Styles/Contact.css';
import Phone from '../../Img/phone.png';
import Email from '../../Img/email.png';
import Address from '../../Img/address.png';
import emailjs from '@emailjs/browser';


function Contact() {

    const formRef = useRef()
    const [done, setDone] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()

        emailjs.sendForm('service_ymf4mu6', 'template_p7sjo48', formRef.current, 'iT8rADc34eNhnWlFz')
            .then((result) => {
                console.log(result.text);
                setDone(true)
            }, (error) => {
                console.log(error.text);
            });
    }

    return (

        <div className="c">
            <div className='c-bg'></div>
            <div className='c-wrapper'>

                <div className='c-left'>
                    <h1 className='c-title'>
                        Let's discuss your project!
                    </h1>

                    <div className='c-info'>
                        <div className='info-item'>
                            <img
                                src={Phone}
                                alt=''
                                className='c-icon'
                            />
                            +52 4422851456
                        </div>

                        <div className='info-item'>
                            <img
                                src={Email}
                                alt=''
                                className='c-icon'
                            />
                            aziel_balocamp56@hotmail.com
                        </div>

                        <div className='info-item'>
                            <img
                                src={Address}
                                alt=''
                                className='c-icon'
                            />
                            El Pueblito, Corregidora, Quereataro
                        </div>
                    </div>

                </div>

                <div className='c-right'>
                    <p className='c-desc'>
                        <b>What's your story?</b> Get in touch always
                        freenlancing if the rifgth project comes along me.
                    </p>

                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input type='text' placeholder='Name' name='user_name' />
                        <input type='text' placeholder='Subject' name='user_subject' />
                        <input type='text' placeholder='Email' name='user_email' />
                        <textarea rows='5' placeholder='Message' name='message' />
                        <button>Submit</button>
                        {done && 'Thank you..'}
                    </form>
                </div>
            </div>
        </div>
    );

}

export default Contact;