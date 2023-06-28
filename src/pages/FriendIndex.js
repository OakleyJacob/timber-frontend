import React from 'react'
import {
  UncontrolledCarousel
} from 'reactstrap';

const FriendIndex = ({friends}) => {
  const slides = friends.map((value) => {
    value.key = value.id 
    value.src = value.img 
    value.caption = value.name
    return(value)
  })
  

  return (
    <>
    <div>FriendIndex</div>

    <UncontrolledCarousel
  items={slides}
 />
 </>
  )
}

export default FriendIndex