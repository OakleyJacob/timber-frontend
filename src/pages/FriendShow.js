import React from 'react'
import styles from '../styles/FriendShow.css'
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
  console.log(friends);
  const handleDelete = () => {
    deleteFriend(id)
    navigate(`/friendindex`)
  }
  return (
    <>
    <Card className="my-2 show">
    <CardImg
      alt="Card image cap"
      src={singleFriend?.img}
      style={{
        height: 500,
        width: 500
      }}
      top
      width="100%"
    />
    <CardBody>
      <CardTitle tag="h5">
        {singleFriend?.name}
      </CardTitle>
      <CardText>
        Species: {singleFriend?.species}
        <br/>
        Age: {singleFriend?.age} 
        <br/>
        Personality: {singleFriend?.personality}
        <br/>
        Favorite Activities: {singleFriend?.activities}
        <br/>
        Size : {singleFriend?.size} feet
      </CardText>
    </CardBody>
    <div className='buttons'>
      <Button onClick = {handleDelete} id='deleteButton'>
        Delete Profile
      </Button>
    <NavLink to={`/friendEdit/${singleFriend?.id}`}>
      <Button id='editButton'>
        Edit {singleFriend?.name}'s Profile
      </Button>
    </NavLink>
    </div>

  </Card>
  <div className='block'></div>
  </>
  )
}

export default FriendShow