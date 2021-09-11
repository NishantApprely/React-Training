import React, { useState } from "react";
import AddUser from "./Adduser";
import DisplayUsers from "./DisplayUsers";
import "./Assignment4.css";

const Assignment4 = () => {
  const [users, setUsers] = useState("");

  const addUseraHandler = (user) => {
    setUsers((previousUser) => {
      return [user, ...previousUser];
    });
  };

  return (
    <div>
      <AddUser onAddUser={addUseraHandler} />
      <DisplayUsers users={users} />
    </div>
  );
};

export default Assignment4;
