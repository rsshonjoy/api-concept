import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);
  const [singleUser, setSingleUser] = useState({});
  const [randomUser, setRandomUser] = useState({});

  useEffect(() => {
    const url = 'https://jsonplaceholder.typicode.com/users';
    fetch(url)
    .then(res => res.json())
    .then(data => setUsers(data))

    // singleUser
    fetch('https://jsonplaceholder.typicode.com/users/1')
    .then(res => res.json())
    .then(data => setSingleUser(data))

    fetch('https://randomuser.me/api/')
    .then(res => res.json())
    .then(data => setRandomUser(data.results[0]))
  }, [])
  return (
    <div>
    <h1>JSON Placeholder</h1>
    {
      users.map(user => <li>{user.name}</li>)
    }

    <h1>Single User Name: {singleUser.name}</h1>

    <h2>Random User First Name: {randomUser.name && randomUser.name.first}</h2>
    <h2>Random User Last Name: {randomUser.name?.last}</h2>
    <h2>Random User Gender: {randomUser.gender}</h2>
    </div>
  );
};

export default App;
