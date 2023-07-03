import React from 'react'
import {
  CardBody,
  CardTitle,
  CardText,
  Card,
  CardImg
} from 'reactstrap';

const NotFound = () => {
  return (
    <>
  <Card className="my-2">
    <CardImg
      alt="Card image cap"
      src="https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
      style={{
        height: 500,
        width: 800
      }}
      top
      width="100%"
    />
    <CardBody>
      <CardTitle tag="h5">
        PAGE NOT FOUND
      </CardTitle>
      <CardText>
        Oh no! You seem to be lost. {' '}
        <a href="/" >Click here to come back home!</a>
        
      </CardText>
    </CardBody>
  </Card>
</>
  )
}

export default NotFound