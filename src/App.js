import './App.css';
import { Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import FriendEdit from "./pages/FriendEdit"
import FriendShow from "./pages/FriendShow"
import FriendNew from "./pages/FriendNew"
import FriendIndex from "./pages/FriendIndex"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import { useEffect, useState } from 'react';

function App() {

  const [friends, setFriends] = useState([])


  useEffect(() => {
    readFriends()

  }, [])

  const readFriends = () => {
    fetch("http://localhost:3000/friends")
    .then((response) => response.json())
    .then((payload) => {
      setFriends(payload)
    })
    .catch((error) => console.log(error))
  }
  
  const createFriend = (friend) => {
    fetch("http://localhost:3000/friends", {
      body: JSON.stringify(friend),
      method: 'POST',
      headers: {
        'Content-Type':'application/json'
      }
    })
    .then((response) => response.json())
    .then(() => readFriends())
    .catch((error) => console.log(error))
  }
  

  const editFriend = (friend, id) => {
    fetch(`http://localhost:3000/friends/${id}`, {
      body: JSON.stringify(friend),
      method: 'PATCH',
      headers: {
        'Content-Type':'application/json'
      }
    })
    .then((response) => response.json())
    .then(() => readFriends())
    .catch((error) => console.log(error))
  }
  
  const deleteFriend = (id) => {
    fetch(`http://localhost:3000/friends/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type':'application/json'
      }
    })
    .then((response) => response.json())
    .then(() => readFriends())
    .catch((error) => console.log(error))
  }
  
  return (
    <>
    <Header />
    <Routes>
      <Route path="/" element={<Home friends={friends}/>} />
      <Route path="/friendindex" element={<FriendIndex friends={friends}/>} />
      <Route path="/friendnew" element={<FriendNew createFriend={createFriend} />} />
      <Route path="/friendshow/:id" element={<FriendShow friends={friends} deleteFriend={deleteFriend}/>} />
      <Route path="/friendnew" element={<FriendNew createFriend={createFriend} />} />
      <Route path="/friendedit/:id" element={<FriendEdit editFriend={editFriend} friends={friends} />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer />
    </>
  );
}

export default App;
