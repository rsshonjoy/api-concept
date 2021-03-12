import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const url = 'https://jsonplaceholder.typicode.com/users';
    fetch(url)
    .then(res => res.json())
    .then(data => setUsers(data))
  }, [])
  return (
    <div>
    <h1>JSON Placeholder</h1>
    {
      users.map(user => <li>{user.name}</li>)
    }
    </div>
  );
};

export default App;
