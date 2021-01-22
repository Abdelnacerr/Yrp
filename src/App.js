import React, { useState } from "react";
import Popup from "react-animated-popup";

const containerStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "100vh",
};

const buttonStyle = {
  backgroundColor: "cadetblue",
  color: "#fff",
  padding: 10,
  cursor: "pointer",
};

const pStyle = {
  textAlign: "center",
};

function App() {
  const [visible, setVisible] = useState(false);

  return (
    <div className="App" style={containerStyle}>
      <div style={buttonStyle} onClick={() => setVisible(!visible)}>
        Show popup!
      </div>
      <Popup visible={visible} onClose={() => setVisible(false)}>
        <p style={pStyle}>
          Finally, an animated popup that is dead simple and customizable to the
          core!
        </p>
      </Popup>
    </div>
  );
}

export default App;
