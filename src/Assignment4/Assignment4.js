import React, { useState } from "react";
import AddUser from "./Adduser";
import DisplayUsers from "./DisplayUsers";
import "./Assignment4.css";
import { Table, Tag, Space } from 'antd';
import 'antd/dist/antd.css';



const dataSource = [
  {
    key: '1',
    name: 'Mike',
    age: 32,
    address: '10 Downing Street',
  },
  {
    key: '2',
    name: 'John',
    age: 42,
    address: '10 Downing Street',
  },
];

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
];

const Assignment4 = () => {

  const [users, setUsers] = useState("");

  const addUseraHandler = (user) => {
    setUsers((previousUsers) => {
      return [user, ...previousUsers];
    });
  };

  return (
    <div>
      <AddUser onAddUser={addUseraHandler} />
      <DisplayUsers users={users} />
      <Table className="table" dataSource={dataSource} columns={columns} />;
    </div>
  );
};

export default Assignment4;
