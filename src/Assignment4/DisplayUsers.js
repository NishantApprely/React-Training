import React from "react";
import DisplayUser from "./DisplayUser";
import "./DisplayUser.css"

const DisplayUsers = (props) => {
  if (props.users.length === 0) {
    return <h2 className="expenses-list_fallback">No User Found.</h2>;
  }

  return (
    <div className="user-card">
      <div className="user">
        <ul className="user-list">
          {props.users.map((user) => (
            <DisplayUser
              key={user.id}
              firstName={user.firstName}
              lastName={user.lastName}
              role={user.role}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DisplayUsers;
