import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { baseURL } from "../utils/constant";
import axios from "axios";
function Popup({ setShowPopup, popupContent, setUpdateUI }) {
  const [input, setInput] = useState(popupContent.text);
  const updateToDo = () => {
    axios
      .put(`${baseURL}/update/${popupContent.id}`, { toDo: input })
      .then((res) => {
        console.log(res.data);
        setUpdateUI((prevState) => !prevState);
        setShowPopup(false);
      });
  };
  return (
    <div className="backdrop">
      <div className="popup">
        <RxCross1
          className="cross"
          onClick={() => {
            setShowPopup(false);
          }}
        />
        <h2>Update To Do</h2>
        <div className="popup__input_holder">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Update To Do"
            type="text"
          />
          <button onClick={updateToDo}>Update</button>
        </div>
      </div>
    </div>
  );
}

export default Popup;
