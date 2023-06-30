import React, { useState } from 'react'
import {Form, Row, Col, FormGroup, Label, Input, Button} from 'reactstrap'
import { useNavigate } from 'react-router-dom'
const FriendNew = ({createFriend}) => {
  const [friend, setFriend] = useState({
    name: '',
    age: '',
    species:'',
    size:'',
    activities:'',
    personality:'',
    img:''
  })

  const navigate = useNavigate()

  const handleChange = (e) => {
    setFriend({...friend, [e.target.name]: e.target.value})
  }
  const handleSubmit = () => {
    createFriend(friend)
    navigate('/friendindex')

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
            Photo
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
          <Label for="activites">
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
           Create Profile
        </Button>
      </Form>
    </>
  )
}

export default FriendNew