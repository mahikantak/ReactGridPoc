import './App.css';
//import axios from 'axios';
import React, { useState } from 'react';
import UserList from './UserList'
import data from './db/users.json';

export default function App() {

  const [userData, setUserData] = useState(data);

  return (
    <div>
     <UserList userlist = {userData}/>
    </div>
  );
}
