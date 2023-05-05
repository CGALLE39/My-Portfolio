import {Link} from "react-router-dom";
import './index.scss';
import Clogo from '../../assets/images/c-logo.png';
import {useEffect, useState} from "react";
import AnimatedLetters from "../AnimatedLetters";
import Loader from "react-loaders";
import Resume from '../../assets/images/Resume.pdf';

const Home = () => {


    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['y', 'n', 't', 'h', 'i', 'a']
    const jobArray = ['w', 'e', 'b', '  ', 'd' , 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', '.']



    useEffect(() => {
         setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
    }, [])

    return (
        <>
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass}_12`}>i, </span>
                    <br />
                    <span className={`${letterClass}_13`}>I</span>
                    <span className={`${letterClass}_14`}>'m</span>
                    <img src={Clogo} alt="developer" />
                <AnimatedLetters letterClass={letterClass}
                strArray={nameArray}
                idx={15}/>
                <br />
                    <AnimatedLetters letterClass={letterClass} strArray={jobArray}
                                     idx={22}/>
                </h1>
            <h2>Full-Stack Web Developer</h2>

                {/*contact button */}
                <Link to="/contact" className='flat-button' >CONTACT ME</Link>

                {/*resume button */}
                <button className="res-button">
                    <a className="resume" href="../../assets/images/Resume.pdf" download = "Resume.pdf">
                        RESUME
                    </a>
                </button>
            </div>

        </div>
            <Loader type="pacman" />
        </>
    );
}

export default Home;