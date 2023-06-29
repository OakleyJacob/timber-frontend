import React, { useState } from 'react'
import {Form, Row, Col, FormGroup, Label, Input, Button} from 'reactstrap'
import { useNavigate } from 'react-router-dom'
const FriendNew = ({createFriend}) => {
  const [friend, setFriend] = useState({
    name: '',
    age: '',
    species:'',
    size:'',
    activies:'',
    personality:'',
    diet:''
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
              />
            </FormGroup>
          </Col>
        </Row>
        <FormGroup>
          <Label for="personality">
            Personality
          </Label>
          <Input
          
            name="personality"
            placeholder="What is your personality?"
            type='textarea'
            onChange = {handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="activites">
            Favorite Activies
          </Label>
          <Input
            name="activies"
            placeholder="What do you like to do?"
            type='textarea'
            onChange = {handleChange}
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