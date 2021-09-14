import React from "react";
import { Card, Avatar, Empty } from "antd";
import { UserOutlined } from "@ant-design/icons";
import "./DisplayUser.css";

const DisplayUsers = (props) => {
  if (props.users.length === 0) {
    return (
      <dev>
        <Empty />
      </dev>
    );
  }

  return (
    <div className="user-card">
      <h4> {console.log(props.users)} </h4>
      <div className="users">
        <ul className="user-list" style={{ listStyle: "none" }}>
          {/* <span>{props.users}</span> */}
          {props.users.map((user) => console.log("Form DisplayUser", user))}
          <span>
            {props.users.map((user) => {
              let tempUser = JSON.parse(user);
              return (
                <li key={tempUser.id} classNamestyle={{ color: "black" }}>
                  <span>{console.log("from span", tempUser)}</span>
                  <span>{console.log("Hii", tempUser.firstName)}</span>
                  <div className="display-user">
                    <Card title="Added User" bordered={false}>
                      <p>
                        <Avatar size="large" icon={<UserOutlined />} />
                        <h4>{tempUser.role}</h4>
                      </p>
                      <p>{tempUser.firstName}</p>
                      <p>{tempUser.lastName}</p>
                    </Card>
                  </div>
                </li>
              );
            })}
          </span>
        </ul>
      </div>
    </div>
  );
};

export default DisplayUsers;
