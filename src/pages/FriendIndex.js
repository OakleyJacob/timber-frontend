import React from 'react'
import { NavLink } from 'react-router-dom';
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button
} from 'reactstrap';

const FriendIndex = ({friends}) => {


  return (
    <>
    <ul style={{listStyle:'none'}}>
      {friends?.map(friend => {
      return ( 
        <li key={friend.id}><Card
          style={{
            width: '18rem'
          }}
        >
        <img
          alt={"Photo of User" + friend.name}
          src={friend.img}
        />

        <CardBody>
          <CardTitle tag="h5">
            Hi My Name is {friend.name}
          </CardTitle>
          <CardSubtitle
            className="mb-2 text-muted"
            tag="h6"
          >
            I am a {friend.species}
          </CardSubtitle>
          <CardText>
            I am {friend.personality}
          </CardText>
 
          <NavLink to={`/friendshow/${friend.id}`}>
            <Button>
            View Profile
            </Button>
          </NavLink>
        </CardBody>
      </Card>
      </li>
    )
  })}
      </ul>
    </>
  )
}

export default FriendIndex