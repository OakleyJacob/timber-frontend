import React from 'react'
import { useParams, NavLink, useNavigate } from 'react-router-dom';
import {
  CardBody,
  CardTitle,
  CardText,
  Card,
  CardImg, 
  Button
} from 'reactstrap';


const FriendShow = ({friends, deleteFriend}) => {
  const{id} = useParams()
  const navigate = useNavigate()
  const singleFriend = friends?.find(friend => {return friend.id == id})
  const handleDelete = () => {
    deleteFriend(id)
    navigate(`/friendindex`)
  }
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
        Favorite Activities: {singleFriend.activities}
        <br/>
        Size Class: {singleFriend.size}
      </CardText>
    </CardBody>
      <Button onClick = {handleDelete}>
        Delete Profile
      </Button>
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