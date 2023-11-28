// create page about this page have all informations about my app Mobile using next js ?
import React from 'react';
import { AppProps } from 'next/app';

const About: React.FC<AppProps> = () => {
    return (
        <div>
            <h1>About My App Mobile</h1>
            <p>My app mobile is a user-friendly and innovative mobile application that aims to improve the user experience while utilizing our services. The application offers a wide range of features and functionalities that cater to the needs of our diverse user base.</p>

            <h2>Features</h2>
            <ul>
                <li>Feature 1</li>
                <li>Feature 2</li>
                <li>Feature 3</li>
                {/* Add more features here */}
            </ul>

            <h2>Functionalities</h2>
            <ul>
                <li>Functionality 1</li>
                <li>Functionality 2</li>
                <li>Functionality 3</li>
                {/* Add more functionalities here */}
            </ul>

            <h2>Compatibility</h2>
            <p>My app mobile is compatible with the following devices:</p>
            <ul>
                <li>Android: Version X.X and above</li>
                <li>iOS: Version X.X and above</li>
            </ul>
        </div>
    );
};

export default About;