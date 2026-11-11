import { Router, Route, Routes } from "react-router-dom";
import ProfilePage, { profile }from "./page/ProfilePage"
import ProfileCard from "./page/ProfileCard"
import EditPage from "./page/EditPage"
import { useState } from "react";
import "./app.css"


function App() {

  const [profiles, setProfiles] = useState(profile);

  return (
    <>
    <Routes>
        <Route path="/" element={<ProfilePage profiles={profiles}/>} />
        <Route path="/profile/:id" element={<ProfileCard profiles={profiles}  setProfiles ={setProfiles} />}/>
        <Route path="/profile/:id/edit" element={<EditPage  profiles ={profiles} setProfiles={setProfiles} />}/>
    </Routes> 
    </>
  )
}

export default App