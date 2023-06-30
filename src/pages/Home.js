import styles from '../styles/Home.css'
import React from 'react'
import {
  UncontrolledCarousel
} from 'reactstrap';

const Home = ({friends}) => {

  const slides = friends?.map((value) => {
    value.key = value.id 
    value.src = value.img 
    value.caption = value.name
    return(value)
  })
  
  return (
    <>
        <div data-testid="homeTest" />
      <h1>Welcome to Timber!</h1>
    <div className='carousel'>
    <UncontrolledCarousel
  items={slides}
  />
  </div>
  </>
  )
  
}

export default Home