import React, { useState } from "react"

const ColorPicker = () => {

  const [color, setColor] = useState("#FFFFFF")
  const [savedColor, setSavedColor] = useState([])

  const handleColorChange = (e) => {
    setColor(e.target.value)
  }

  return (
    <div className="page-container">
      <div className="color-picker-container">
        <h1 style={{ color: color, textShadow: "1px 1px 2px black" }}>Color Picker</h1>
        <div className="color-display"
          style={{ backgroundColor: color }}
        >
          <p>Color: {color}</p>
        </div>
        <label>Choose a Color:</label>
        <input type="color" value={color} onChange={handleColorChange}></input>
      </div>
      <p>Saved Colors:</p>
    </div>
  )
}

export default ColorPicker