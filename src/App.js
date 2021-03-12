import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);
  const [singleUser, setSingleUser] = useState({});
  useEffect(() => {
    const url = 'https://jsonplaceholder.typicode.com/users';
    fetch(url)
    .then(res => res.json())
    .then(data => setUsers(data))

    // singleUser
    fetch('https://jsonplaceholder.typicode.com/users/1')
    .then(res => res.json())
    .then(data => setSingleUser(data))
  }, [])
  return (
    <div>
    <h1>JSON Placeholder</h1>
    {
      users.map(user => <li>{user.name}</li>)
    }

    <h1>Single User Name: {singleUser.name}</h1>

    </div>
  );
};

export default App;
