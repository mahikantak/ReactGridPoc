import './App.css';
//import axios from 'axios';
import React, { useState } from 'react';
import UserList from './UserList'
import data from './db/users.json';

const url = './db/users.json';
export default function App() {

  const [userData, setUserData] = useState(data);

  console.log(userData);

  
  return (
    <div>
     <UserList userlist = {userData}/>
    </div>
  );
}
