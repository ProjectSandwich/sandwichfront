import React from 'react';
import { Card, Container } from 'react-bootstrap';
import './Home.css'

export default class Home extends React.Component {
render(){
  return(
    <div className='home-background'>
       <Container>
         <Card className="welcome-card">
           <Card.Body>
             <h1>Welcome to Project Sandwich!</h1>
             <h2>Have you have ever eaten a sandwich that was so amazing it was a  transcendental experience that you have obsessed over and want to replicate? PROJECT SANDWICH is a site  where you can share your experience and also search other Best Sandwich Experiences other avid sandwich aficionados have posted.
</h2>
           </Card.Body>
         </Card>
       </Container>
    </div>
    
  )
}
}