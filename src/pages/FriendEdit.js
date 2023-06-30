import React, { useState } from 'react'
import {Form, Row, Col, FormGroup, Label, Input, Button} from 'reactstrap'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom';

const FriendEdit = ({friends, editFriend}) => {
  
  const{id} = useParams()
  
  const singleFriend = friends?.find(friend => {return friend.id == id})

  const [friend, setFriend] = useState({
    name: singleFriend.name,
    age: singleFriend.age,
    species: singleFriend.species,
    size: singleFriend.size,
    activities: singleFriend.activities,
    personality: singleFriend.personality,
    diet: singleFriend.diet,
    img: singleFriend.img
  })

  

  const navigate = useNavigate()

  const handleChange = (e) => {
    setFriend({...friend, [e.target.name]: e.target.value})
  }
  const handleSubmit = () => {
    editFriend(friend)
    navigate(`/friendshow/${id}`)

  }
  return (
    <>
      <Form>
        <Row>
          <Col md={6}>
            <FormGroup>
              <Label for="name">
                Name
              </Label>
              <Input
                name="name"
                placeholder="add your name"
                type="text"
                onChange = {handleChange}
                value={friend.name}
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="Species">
                Species
              </Label>
              <Input
                name="species"
                placeholder="enter your species"
                type="text"
                onChange = {handleChange}
                value={friend.species}
              />
            </FormGroup>
          </Col>
        </Row>
        <FormGroup>
          <Label for="image URL">
            Upload your Photo
          </Label>
          <Input
            name="img"
            placeholder="What is your image URL?"
            type='textarea'
            onChange = {handleChange}
            value={friend.img}
          />
        </FormGroup>
        <FormGroup>
          <Label for="personality">
            Personality
          </Label>
          <Input          
            name="personality"
            placeholder="What is your personality?"
            type='textarea'
            onChange = {handleChange}
            value={friend.personality}
          />
        </FormGroup>
        <FormGroup>
          <Label for="activities">
            Favorite Activities
          </Label>
          <Input
            name="activities"
            placeholder="What do you like to do?"
            type='textarea'
            onChange = {handleChange}
            value={friend.activities}
          />
        </FormGroup>
        <Row>
          <Col md={6}>
            <FormGroup>
              <Label for="size">
                Size
              </Label>
              <Input
                name="size"
                placeholder="What is your height in feet?"
                type='number'
                onChange = {handleChange}
                value={friend.size}
              />
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label for="diet">
                Diet
              </Label>
              <Input
                
                name="diet"
                placeholder= "What nutrients do you like?"
                type = 'text'
                onChange = {handleChange}
                value={friend.diet}
              />
            </FormGroup>
          </Col>
          <Col md={2}>
            <FormGroup>
              <Label for="age">
                Age
              </Label>
              <Input

                name="age"
                placeholder= "How many rings?"
                type = 'number'
                onChange = {handleChange}
                value={friend.age}
              />
            </FormGroup>
          </Col>
        </Row>

        <Button onClick = {handleSubmit}>
        Edit Profile
        </Button>
      </Form>
    </>
  )
}

export default FriendEdit