import { useState } from "react";

function ToggleButton() {
  const [showMessage, setShowMessage] = useState(false);

  function clickHandler() {
    setShowMessage(!showMessage);
  }

  return (
    <>
      <button onClick={clickHandler}>Toggle Message</button>
      {showMessage && <p>Hello, welcome to React!</p>}
    </>
  );
}

export default ToggleButton;
