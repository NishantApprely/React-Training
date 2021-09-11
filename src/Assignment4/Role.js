import React from "react";
import "./DisplayUser.css";

const Role = (props) => {
  return (
    <div className="user-role">
      <div className="role-circle">
        <h3>{props.role}</h3>
      </div>
    </div>
  );
};

export default Role;
