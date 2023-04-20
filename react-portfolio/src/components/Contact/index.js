import './index.scss';
import AnimatedLetters from "../AnimatedLetters";
import Loader from "react-loaders";
import {useEffect, useRef, useState} from "react";
import emailjs from '@emailjs/browser';


const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const form = useRef()
    useEffect(() => {
        return setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs
            .sendForm('gmail', 'TEMPLATE_ID', form.current, 'your-token')
            .then(
                () => {
                    alert('Message successfully sent!')
                    window.location.reload(false)
                },
                () => {
                    alert('Failed to send the message, please try again')
                }
            )
    }

    return (
        <>
                <div className='container contact-page'>
                        <div className='text-zone'>
                                <h1>
                                    <AnimatedLetters
                                        letterClass={letterClass}
                                        strArray={['C', 'o', 'n', 't', 'a', 'c', 't', '  ', 'm', 'e']}
                                        idx={15}
                                    />
                                </h1>
                            <p>
                                    message me!
                            </p>
                            <div className='contact-form'>
                                <form ref={form} onSubmit={sendEmail}>
                                    <ul>
                                        <li className='half'>
                                            <input type="text" name="name" placeholder="Name" required />
                                        </li>
                                        <li className="half">
                                            <input
                                                type="email"
                                                name="email"
                                                placeholder="Email"
                                                required
                                            />
                                        </li>
                                        <li>
                                            <input placeholder="Subject" type="text" name="subject" required/>
                                        </li>
                                        <li>
                                              <textarea
                                                  placeholder="Message"
                                                  name="message"
                                                  required
                                              ></textarea>
                                        </li>
                                        <li>
                                            <input type="submit" className="flat-button" value="SEND" />
                                        </li>
                                    </ul>
                                </form>
                            </div>
                        </div>
                </div>
            <Loader type="pacman" />
        </>
    )
}

export default Contact;