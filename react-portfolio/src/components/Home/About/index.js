import './index.scss';
import AnimatedLetters from "../../AnimatedLetters";
import {useEffect, useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faCss3,
    faGitAlt,
    faHtml5, faJava,
    faJsSquare,
    faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from "react-loaders";

const About = () => {

    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
         setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
    }, []);

    return (
        <>
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['A', 'b', 'o', 'u', 't', '  ', 'm', 'e']}
                        idx={15}
                    />
                </h1>
                <p>Ambitious fullstack web developer looking to advance in my career in tech.
                </p>
                <p>
                    I'm born and raised in San Antonio, Texas currently residing in Austin, Texas!
                </p>
                <p>
                    My interests reside with fitness, sandbox games, and volunteering ☺️.
                </p>
            </div>

            <div className="stage-cube-cont">
                <div className="cubespinner">
                    <div className="face1">
                        <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faJava} color="#DD0031" />
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faHtml5} color="#DD0031" />
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon={faGitAlt} color="#DD0031" />
                    </div>
                </div>
            </div>
        </div>

        <Loader type="pacman" />

            </>
    )
}



export default About;