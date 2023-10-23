import React from 'react';
import insta from './instagram.png';
import git from './github.png';
import linked from './linkedin.png';
import twitt from './twitter.png';

const ContactPage = () => {
    const containerStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width:'50%',
        marginTop:'80px',
        marginLeft:'auto',
        marginRight:'auto',
        height: '50px',
    };

    const contentStyle = {
        width: '50%',
        textAlign: 'center',
        padding: '10px',
        backgroundColor: '#fff',
        border: '1px solid #ccc',
        borderRadius: '5px'
    };

    const imageStyle = {
        width: '50px',
        height: '50px',
        margin: '10px'
    };
    

    return (
        <div style={containerStyle}>
            <div style={contentStyle}>
                <h1 style={{marginBottom: '30px'}}>Contact Me</h1>
                <div>
                    <a href="https://www.instagram.com" target="_blank" >
                        <img src={insta} alt="Instagram" style={imageStyle} />
                    </a>
                    <a href="https://github.com" target="_blank">
                        <img src={git} alt="GitHub" style={imageStyle} />
                    </a>
                    <a href="https://www.linkedin.com" target="_blank">
                        <img src={linked} alt="LinkedIn" style={imageStyle} />
                    </a>
                    <a href="https://twitter.com" target="_blank">
                        <img src={twitt} alt="Twitter" style={imageStyle} />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
