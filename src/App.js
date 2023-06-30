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
import MockFriends from "./MockFriends"
import { useState } from 'react';

function App() {

  const [friends, setFriends] = useState(MockFriends)
  const createFriend = (friend) => {
    console.log(friend);
  }

  const editFriend = (friend) => {
    console.log(friend);
  }
  
  return (
    <>
    <Header />
    <Routes>
      <Route path="/" element={<Home friends={friends}/>} />
      <Route path="/friendindex" element={<FriendIndex friends={friends}/>} />
      <Route path="/friendshow/:id" element={<FriendShow friends={friends}/>} />
      <Route path="/friendnew" element={<FriendNew createFriend={createFriend}/>} />
      <Route path="/friendedit/:id" element={<FriendEdit editFriend={editFriend} friends={friends}/>} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer />
    </>
  );
}

export default App;
