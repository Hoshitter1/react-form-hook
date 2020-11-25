import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [nameHeading, setNameHeading] = useState("");
  function handleChange(event) {
    setName(event.target.value);
  }
  function clickEvent(event) {
    setNameHeading(name);
    event.preventDefault();
    // This func prevent the page from refreshing
  }

  return (
    <div className="container">
      <h1>Hello {nameHeading}</h1>
      <form onSubmit={clickEvent}>
        <input
          value={name}
          onChange={handleChange}
          type="text"
          placeholder="What's your name?"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
// 1. value of input has to be set for "controlled components'
// 2. form on submit has th4e same effect as button onClick
export default App;
