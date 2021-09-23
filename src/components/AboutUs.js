import React from 'react';
import '../AboutUs.css';
import Image from 'react-bootstrap/Image';
import Susan from '../images/Susan.jpg';
import Ian from '../images/Ian.jpg';
import Misti from '../images/Misti.jpg';
// import { Container, Card } from "react-bootstrap"




const AboutUs = () => {
  return (
    <div id='aboutusDiv'>
      <div key={1} id="mistiaboutus">
        <h1>Misti Dinzy</h1>
        <Image id="mistiProfileImage" src={Misti} alt={'Misti Dinzy'} roundedCircle />
       <p>Misti is an aspiring web developer and digital artist. Previously, she worked at Nordstrom for about 8 years, as a Fraud Prevention Analyst and then a Quality Assurance Auditor. She is passionate about volunteering and animal rescue. Misti lives with her fiance Dakota, their dog, two cats, chinchilla and foster dogs. She came to Delta V Code School to gain the skills that will allow her to move into a fulfilling career, with a healthier work/life balance and remote work flexibility. She wants to be able to apply her analytical skills and determination in a way that creates a positive impact to her community.</p>
      </div>
      <div key={2} id="ianaboutus">
        <h1>Ian Whitmore</h1>
        <Image id="ianProfileImage" src={Ian} alt={'Ian Whitmore'} roundedCircle />
       <p>Ian is an aspiring software developer currently going through the Delta V Code School program. After graduating from the University of Iowa in 2011 he worked in both the real estate and banking industries prior to starting his software development journey. From his past professional experiences he gained valuable skills in sales, customer service, communication, and teamwork.After Delta V, Ian is looking forward to a new career in the tech industry. He is interested in full stack development as it allows him to tap into both his creative side and my problem-solving/analytical side.Ian enjoys spending time with his family, especially his wife, Sarah, and his son, Wesley. He also loves food (BBQ), sports (golf), and traveling. He loves animals and rescued his 6 year old dog Ella from Last Hope Animal Rescue in Cedar Rapids.</p>
      </div>
      <div key={3} id="susanaboutus">
        <h1>Susan Hargus</h1>
        <Image id="susanProfileImage" src={Susan} alt={'Susan Hargus'} roundedCircle />
        
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu

</p>
      </div>
    </div>
  );
};



 export default AboutUs;


