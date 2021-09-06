import React, { useState } from "react";
import "./InputBox.css";

const InputBox = () => {
  const [data, setData] = useState("");

  function getData (event) {
        setData(event.target.value);
        console.log(event.target.value);
  }

  return (
    <div className="content">
      <input 
        type="text"
        placeholder="Enter Text Here"
        onChange = {getData}
      />
      <h2 style={{align: 'center'}}>{data}</h2>
    </div>
  );
};

export default InputBox;
