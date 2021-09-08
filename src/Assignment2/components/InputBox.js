import React, { useState } from "react";
import "./Component.css";

const InputBox = () => {
  const [data, setData] = useState("");

  function getData (event) {
        setData(event.target.value);
  }

  return (
    <div className="input-box">
      <input 
        type="text"
        placeholder="Enter Text Here"
        onChange = {getData}
      />
      <h3>{data}</h3>
    </div>
  );
};

export default InputBox;
