import { useState } from "react";

function ColorChanger() {
  const [color, setColor] = useState("");

  const handleInputChange = (e) => {
    setColor(e.target.value);
  };

  const boxStyle = {
    width: "100px",
    height: "100px",
    margin: "10px 0",
    border: "1px solid #000",
    backgroundColor: color,
  };

  return (
    <>
      <input
        type="text"
        onChange={handleInputChange}
        value={color}
        placeholder="Enter a color"
      />
      <div style={boxStyle}></div>
    </>
  );
}

export default ColorChanger;
