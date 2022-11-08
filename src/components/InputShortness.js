import React, { useState } from "react";

const InputShortness = ({ setInputValue }) => {
  const [value, setValue] = useState("");
  const handleClickShorten = (e) => {
    console.log("123456", value);
    e.preventDefault();
    setInputValue(value);
    setValue("");
  };
  return (
    <div className="input-container">
      <h1>
        URL<span>Shortener</span>
      </h1>
      <div>
        <input
          type="text"
          onChange={(e) => setValue(e.target.value)}
          placeholder="put your link here"
          value={value}
        />
        <button onClick={handleClickShorten}>shorten</button>
      </div>
    </div>
  );
};

export default InputShortness;
