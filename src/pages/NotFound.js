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
      src="https://picsum.photos/1200/600"
      style={{
        height: 500
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