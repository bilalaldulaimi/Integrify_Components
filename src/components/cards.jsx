import React, { useState, useEffect } from "react";
import Button from "./button";
import { Link, Router } from "react-router-dom";
function Cards() {
  const [users, setUsers] = useState("");
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  });
  return (
    <Router>
      <div className="card-container">
        {users &&
          users.map((user) => (
            <div className="card-content">
              <h2>{user.name[0]}</h2>
              <h1>{user.name}</h1>
              <p>@{user.username}</p>
              <p>http://{user.website}</p>
              <Link to={`/users/${user.id}`}>
                <Button />
              </Link>
            </div>
          ))}
      </div>
    </Router>
  );
}

export default Cards;
