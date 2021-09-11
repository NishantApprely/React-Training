import React from "react";
import "./DisplayUser.css";
import Role from "./Role";

const DisplayUser = (props) => {
  return (
    <div className="user">
      <Role role={props.role} />
      <h3>{props.firstName}</h3>
      <h3>{props.lastName}</h3>
    </div>
  );
};

export default DisplayUser;
