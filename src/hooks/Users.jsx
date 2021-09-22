import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Users(props) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function getUsers() {
      const result = await axios('https://jsonplaceholder.typicode.com/users')
      setUsers(result.data) //result.data returns the array of user objects that we get from the server. Should store this data in the state of the component
    }
    getUsers();
  })
  return (
    <div>
      <ul>
        {users.map(user => <li key={user.id}>{user.name}</li>)}
      </ul>
    </div>
  );
}

export default Users;
