import './index.scss';
import AnimatedLetters from "../AnimatedLetters";
import Loader from "react-loaders";
import {useEffect, useRef, useState} from "react";
import emailjs, {sendForm} from '@emailjs/browser'

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const refForm = useRef

    useEffect(() => {
        return setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs.sendForm('gmail', 'TEMPLATE_ID', e.target, 'EMAIL_KEY')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    };



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
                                    call meeee
                            </p>
                            <div className='contact-form'>
                                <form ref={refForm} onSubmit={sendEmail}>
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