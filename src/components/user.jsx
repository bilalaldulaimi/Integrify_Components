import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
function User() {
  const { id } = useParams();
  const [users, setUsers] = useState("");
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  });
  return (
    <div>
      {users &&
        users
          .filter((user) => user.id === id)
          .map((user) => (
            <div>
              <h1>{user.name}</h1>
            </div>
          ))}
    </div>
  );
}

export default User;
