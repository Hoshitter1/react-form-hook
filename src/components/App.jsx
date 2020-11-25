import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: "",
  });

  function handleChange(event) {
    const { value, name } = event.target;
    setContact((prevValue) => {
      return { ...prevValue, [name]: value };
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
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form onSubmit={clickEvent}>
        <input
          name="fName"
          value={contact.fName}
          onChange={handleChange}
          type="text"
          placeholder="your first anem"
        />
        <input
          name="lName"
          value={contact.lName}
          onChange={handleChange}
          type="text"
          placeholder="your last name"
        />
        <input
          name="email"
          value={contact.email}
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
