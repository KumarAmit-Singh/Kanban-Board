import React, { useState } from "react";
import "./DropArea.css";

const DropArea = ({ onDrop }) => {
  // 1 state using in form of useState
  const [showDrop, setShowDrop] = useState(false);
  return (
    <section 
        onDragEnter={() =>
            setShowDrop(true)}
        onDragLeave={() => 
            setShowDrop(false)} 
        onDrop={() => {
            onDrop();
            setShowDrop(false);
        }}
        onDragOver={event => event.preventDefault()}
        className={showDrop ? "drop_area" : "hide_drop"}>
      Drop Here
    </section>
  );
};

export default DropArea;
