import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";

function Popup() {
  const [input, setInput] = useState("");
  return (
    <div className="backdrop">
      <div className="popup">
        <RxCross1 className="cross" />
        <h1>Update To Do</h1>
        <div className="popup__input_holder">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Update To Do"
            type="text"
          />
          <button>Update</button>
        </div>
      </div>
    </div>
  );
}

export default Popup;
