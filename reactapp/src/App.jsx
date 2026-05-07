import { useState, useEffect } from "react";


function Child(props) {
  return (
    <div>
      <h2>Name: {props.name}</h2>
      <h2>Age: {props.age}</h2>
      <hr />
    </div>
  );
}


function App() {
 
  const name = "jack";
  const age = 19;


  const [users, setUsers] = useState([]);


  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <h1>Parent Component</h1>

      {}
      <Child name={name} age={age} />

      <h1>User List</h1>

      {}
      {users.map((user) => (
        <div key={user.id}>
          <p>Username: {user.username}</p>
          <p>Email: {user.email}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default App;