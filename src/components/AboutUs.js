import React from 'react';
import '../AboutUs.css';
import Image from 'react-bootstrap/Image';
import Susan from '../images/Susan.jpg';
import Ian from '../images/Ian.jpg';
import Misti from '../images/Misti.jpg';



const AboutUs = () => {
  return (
    <div id='aboutusDiv'>
      <div key={1} id="mistiaboutus">
        <h1>Misti Dinzy</h1>
        <Image id="mistiProfileImage" src={Misti} alt={'Misti Dinzy'} roundedCircle />
       
        <p></p>
      </div>
      <div key={2} id="ianaboutus">
        <h1>Ian Whitmore</h1>
        <Image id="ianProfileImage" src={Ian} alt={'Ian Whitmore'} roundedCircle />
       
        <p>.</p>
      </div>
      <div key={3} id="susanaboutus">
        <h1>Susan Hargus</h1>
        <Image id="susanProfileImage" src={Susan} alt={'Susan Hargus'} roundedCircle />
        
        <p></p>
      </div>
    </div>
  );
};


export default AboutUs;


