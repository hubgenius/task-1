import React from 'react'
import {Card ,Button,Alert} from "react-bootstrap"
function Service() {
    const cardInfo = [
        { image:'https://media.istockphoto.com/photos/office-workplace-background-picture-id1189964492' ,title:'UI/UX Design',text:'Free resource that will help nderstand thecv designc process and improve theroi nderstand the design process andisei impro are of vquality.'},
        { image:'https://media.istockphoto.com/photos/office-workplace-background-picture-id1189964492' ,title:'Digital Marketing',text:'Free resource that will help nderstand thecv designc process and improve theroi nderstand the design process andisei impro are of vquality.'},
        { image:'https://media.istockphoto.com/photos/office-workplace-background-picture-id1189964492' ,title:'Website Design',text:'Free resource that will help nderstand thecv designc process and improve theroi nderstand the design process andisei impro are of vquality.'},
        { image:'https://media.istockphoto.com/photos/office-workplace-background-picture-id1189964492' ,title:'Website Design',text:'Free resource that will help nderstand thecv designc process and improve theroi nderstand the design process andisei impro are of vquality.'},
        { image:'https://media.istockphoto.com/photos/office-workplace-background-picture-id1189964492' ,title:'Digital Marketing',text:'Free resource that will help nderstand thecv designc process and improve theroi nderstand the design process andisei impro are of vquality.'},
        { image:'https://media.istockphoto.com/photos/office-workplace-background-picture-id1189964492' ,title:'UI/UX Design',text:'Free resource that will help nderstand thecv designc process and improve theroi nderstand the design process andisei impro are of vquality.'}
    ]

    const renderCard=(card,index)=>{
        return(

        <Card style={{ width: '18rem' }} keys={index}>
  <Card.Img variant="top" src="holder.js/100px180" src={card.image}/>
  <Card.Body>
    <Card.Title>{card.title}</Card.Title>

    <Card.Text>
      <div class='card'>
     {card.text}
      </div>
    </Card.Text>
   
  </Card.Body>
</Card>
        )
    }
  return (
      <>
    <div>
        {cardInfo.map(renderCard)}
        <Alert variant="outline-danger">
  <Alert.Heading>Hey, nice to see you</Alert.Heading>
  <p>
  Dont worry for contact i`m available
  </p>
 
  
</Alert>
        </div>

    </>
  )
}

export default Service