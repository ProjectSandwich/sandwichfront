import React from 'react';
import '../AboutUs.css';
import Image from 'react-bootstrap/Image';
import Susan from '../assets/Susan.jpg';
import Ian from '../assets/Ian.jpg';
import Misti from '../assets/Misti.jpg';
// import { Container, Card } from "react-bootstrap"




const AboutUs = () => {
  return (
    <div id='aboutusDiv'>
      <div key={1} id="mistiaboutus">
        <h1>Misti Dinzy</h1>
        <Image id="mistiProfileImage" src={Misti} alt={'Misti Dinzy'} roundedCircle />
        <p>Misti is an aspiring web developer and digital artist. Previously, she worked at Nordstrom for about 8 years, as a Fraud Prevention Analyst and then a Quality Assurance Auditor. She is passionate about volunteering and animal rescue. Misti lives with her fiance Dakota, their dog, two cats, chinchilla and foster dogs. She came to Delta V Code School to gain the skills that will allow her to move into a fulfilling career, with a healthier work/life balance and remote work flexibility. She wants to be able to apply her analytical skills and determination in a way that creates a positive impact to her community. Her favorite sandwich is a Banana Fluffernutter.</p>
      </div>
      <div key={2} id="ianaboutus">
        <h1>Ian Whitmore</h1>
        <Image id="ianProfileImage" src={Ian} alt={'Ian Whitmore'} roundedCircle />
        <p>Ian is an aspiring software developer currently going through the Delta V Code School program. After graduating from the University of Iowa in 2011 he worked in both the real estate and banking industries prior to starting his software development journey. From his past professional experiences he gained valuable skills in sales, customer service, communication, and teamwork.After Delta V, Ian is looking forward to a new career in the tech industry. He is interested in full stack development as it allows him to tap into both his creative side and my problem-solving/analytical side.Ian enjoys spending time with his family, especially his wife, Sarah, and his son, Wesley. He also loves food (BBQ), sports (golf), and traveling. He loves animals and rescued his 6 year old dog Ella from Last Hope Animal Rescue in Cedar Rapids.</p>
      </div>
      <div key={3} id="susanaboutus">
        <h1>Susan Hargus</h1>
        <Image id="susanProfileImage" src={Susan} alt={'Susan Hargus'} roundedCircle />
        <p>Hello! My name is Susan Hargus. My family and I moved to Mount Vernon from Los Angeles almost 20 years ago. I graduated with a BFA from the U of Iowa and I trained at an Atelier in Minneapolis in the painting manner known as ‘Classical Realism’. I came to DeltaV because I always had an interest in coding. I look at coding as a skill that is creative and employs that same kind of deep thinking one uses when creating art. Its inherently creative qualities and ever evolving nature provide the opportunity of continual discovery and learning. Her favorite sandwich is bahn mi.</p>
      </div>
    </div>
  );
};



 export default AboutUs;


