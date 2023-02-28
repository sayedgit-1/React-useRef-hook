import React, { useState, useRef } from "react";

const App = () => {
  const [name, setName] = useState("");
  const inputRef = useRef();
  console.log(inputRef);

  function handleClick() {
    setName("");
    inputRef.current.focus();
    inputRef.current.style.backgroundColor = "pink";
  }

  return (
    <div>
      <h1>React : useRef() hook </h1>
      <p>
        <i>
          - Dom Manipulation <br />- creates a mutable vriable which will nopt
          re-render the components
        </i>
      </p>

      <div>
        <input
          ref={inputRef}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <br />
        <p>Your Name is : {name}</p>

        <button onClick={handleClick}>focus</button>
      </div>
    </div>
  );
};

export default App;
