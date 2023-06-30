import React from 'react'
import { useParams, NavLink } from 'react-router-dom';
import {
  CardBody,
  CardTitle,
  CardText,
  Card,
  CardImg, 
  Button
} from 'reactstrap';


const FriendShow = ({friends}) => {
  const{id} = useParams()
  const singleFriend = friends?.find(friend => {return friend.id == id})

  return (
    <>
    <Card className="my-2">
    <CardImg
      alt="Card image cap"
      src="https://picsum.photos/500/500"
      style={{
        height: 500,
        width: 500
      }}
      top
      width="100%"
    />
    <CardBody>
      <CardTitle tag="h5">
        {singleFriend.name}
      </CardTitle>
      <CardText>
      Species: {singleFriend.species}
      <br/>
      Age: {singleFriend.age} 
      <br/>
      Personality: {singleFriend.personality}
      <br/>
      Diet: {singleFriend.diet}
      <br/>
      Favorite Activities: {singleFriend.activities}
      <br/>
      Size Class: {singleFriend.size}
      
      </CardText>
    </CardBody>
    <NavLink to={`/friendEdit/${singleFriend.id}`}>
            <Button>
            Edit {singleFriend.name}'s Profile
            </Button>
          </NavLink>
  </Card>
  </>
  )
}

export default FriendShow