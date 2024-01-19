import React, { useEffect, useState } from 'react'
import { YOUTUBE_API } from '../utils/constants';
import User from './User';

const Fetch = () => {
    const [user,setUser] = useState([]);
    console.log("users",user);
    useEffect(()=>{
        getVideos(); 
    },[])

const getVideos = async () =>{
    const data = await fetch("https://jsonplaceholder.typicode.com/users");
    const json = await data.json();
    setUser(json);
    console.log(json);
}    

  return (
    <>
    {user.map(u=><User key={u.id} info={u}/>)}
    {/* <User info={user[0]}/> */}
    </>
  )
}

export default Fetch