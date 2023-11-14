import React, { useEffect, useState } from "react";
import ToDo from "./components/Todo";
import axios from "axios";
import { baseURL } from "./utils/constant";
import Popup from "./components/Popup";

function App() {
  const [toDos, setToDos] = useState([]);
  const [input, setInput] = useState("");
  const [updateUI, setUpdateUI] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  // USE EFFECT HOOK
  useEffect(() => {
    axios
      .get(`${baseURL}/get`)
      .then((res) => {
        setToDos(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [updateUI]);

  // ADD TODOS
  const saveToDo = () => {
    axios
      .post(`${baseURL}/save`, { toDo: input })
      .then((res) => {
        console.log(res.data);
        setUpdateUI((prevState) => !prevState);
        setInput("");
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <main>
      <div className="container">
        <h1 className="title">MERN TODO</h1>
        <div className="input_holder">
          <input
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
            }}
            type="text"
            placeholder="Add a todo"
          />
          <button onClick={saveToDo}>Add</button>
        </div>
        <div className="list">
          {toDos.map((el) => (
            <ToDo
              id={el._id}
              key={el._id}
              text={el.toDo}
              setUpdateUI={setUpdateUI}
              setShowPopup={setShowPopup}
            />
          ))}
        </div>
      </div>
      {showPopup && <Popup />}
    </main>
  );
}

export default App;
