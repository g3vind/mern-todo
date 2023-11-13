import React from "react";

function App() {
  return (
    <main>
      <div className="container">
        <h1 className="title">MERN TODO</h1>
        <div className="input_holder">
          <input type="text" placeholder="Add a todo" />
          <button>Add</button>
        </div>
      </div>
    </main>
  );
}

export default App;
