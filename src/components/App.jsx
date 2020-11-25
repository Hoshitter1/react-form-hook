import React, { useState } from "react";

function App() {
  const [fullName, setFullName] = useState({
    fName: "",
    lName: "",
  });
  function handleChange(event) {
    const { value, name } = event.target;

    setFullName((prevValue) => {
      if (name === "fname") {
        return {
          fName: value,
          lName: prevValue.lName,
        };
      } else if (name === "lname") {
        return {
          fName: prevValue.fName,
          lName: value,
        };
      }
    });
  }

  function clickEvent(event) {
    // Do something
    console.log("Clicked");
    event.preventDefault();
    // This func prevent the page from refreshing
  }

  return (
    <div className="container">
      <h1>
        Hello {fullName.fName} {fullName.lName}
      </h1>
      <form onSubmit={clickEvent}>
        <input
          name="fname"
          value={fullName.fName}
          onChange={handleChange}
          type="text"
          placeholder="your first anem"
        />
        <input
          name="lname"
          value={fullName.lName}
          onChange={handleChange}
          type="text"
          placeholder="your last name"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
// 1. value of input has to be set for "controlled components'
// 2. form on submit has th4e same effect as button onClick
export default App;
