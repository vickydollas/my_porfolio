import React from 'react';
import './Body.css'
import social from '../images/facebook.png'
import socialtwo from '../images/github.png'
import socialthree from '../images/linkedln.png'
import socialfour from '../images/twitter.png'

function AboutMe () {
    return(
        <div className='container'>
            <h1>Victor Adebayo</h1>
            <p>Full stack developer</p>
            <div>
                <button className='btn-1'>Email</button>
                <button className='btn-2'>Linkedln</button>
            </div>
            <div className='sub-container'>
                <h2>About</h2>
                <p>I'm a graduate of Electrical/Electronics Engineering from the The federal polytechnic Ado-ekiti, 
                    with a graduating CGPA of 3.13. I am an hardworking graduate frequently praised among peers for efficiency even when working under pressure. 
                    I have an experience working with a set of technical expert in the installation of electrical street lights, and in the
                    production of solar inverters and the installation. I am also a Front-end developer, having two years experience in programming.

                </p>
                <h3>Interest</h3>
                <p>I love to know learn new skills pertaining to web-development and science related.
                    I also love to involve myself in installations be it electrical or solar related.
                </p>
            </div>
            <footer>
                <a href='https://www.google.com'>
                <img 
                src={social}
                alt='Error'
                className='icon-sizing-1'
                />
                </a>
                <a href='https://www.github.com'>
                <img 
                src={socialtwo}
                alt='Error'
                className='icon-sizing-2'
                />
                </a>
                <a href='https://www.goole.com'>
                <img 
                src={socialthree}
                alt='Error'
                className='icon-sizing-3'
                />
                </a>
                <a href='https://twitter.com/Yansh_lover'>
                <img 
                src={socialfour}
                alt='Error'
                className='icon-sizing-4'
                />
                </a>
            </footer>
        </div>
    )
}
export default AboutMe;