import React from 'react';
import { FaGithub, FaLinkedin, FaCode, FaEnvelope } from 'react-icons/fa';
import './Contact.css';

function Contact() {
    return (
        <>
            
            <div className="icons">
            <h2>Contact Me</h2>
                <ul>
                    <li>
                        <a ><FaCode color='black' size={55} /></a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/dharshini-r-20b443282"><FaLinkedin color='black' size={55} /></a>
                    </li>
                    <li>
                        <a href="mailto:2112026@nec.edu.in"><FaEnvelope color='black' size={55} /></a>
                    </li>
                    <li>
                        <a href="https://github.com/DharshiniR04/"><FaGithub color='black' size={55} /></a>
                    </li>
                    <li>
                        <a ><FaCode color='black' size={55} /></a>
                    </li>

                </ul>
            </div>
        </>
    );
}

export default Contact;