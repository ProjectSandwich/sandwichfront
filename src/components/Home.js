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
             Welcome to Project Sandwich!
           </Card.Body>
         </Card>
       </Container>
    </div>
  )
}
}