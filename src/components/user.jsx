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
          .filter((user) => user.id == id)
          .map((user) => (
            <div className="user-container">
              <h3>- name: {user.name}</h3>
              <h3>- username: {user.username}</h3>
              <h3>- email: {user.email}</h3>
              <h3>- phone: {user.phone}</h3>
              <h3>- company: {user.company.name}</h3>
              <h3>- website: {user.website}</h3>
              <h3>- adress: </h3>
              <ul>
                <h3><li>street: {user.address.street}</li></h3>
                <h3><li>suite: {user.address.suite}</li></h3>
                <h3><li>city: {user.address.city}</li></h3>
                <h3><li>zipcode: {user.address.zipcode}</li></h3>
              </ul>
            </div>
          ))}
    </div>
  );
}

export default User;
