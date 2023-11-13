const ToDoModel = require("../models/ToDoModel");

// GET TODOS
module.exports.getToDos = async (req, res) => {
  try {
    const toDos = await ToDoModel.find();
    res.send(toDos);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

// POST TODOS
module.exports.saveToDo = (req, res) => {
  const { toDo } = req.body;
  ToDoModel.create({ toDo })
    .then((data) => {
      console.log("SAVED SUCCESSFULLY");
      res.status(201).send(data);
    })
    .catch((err) => {
      console.log(err);
      res.send({ error: err, msg: "Something Went Wrong (POST)☹" });
    });
};

// UPDATE TODOS
module.exports.updateToDo = (req, res) => {
  const { id } = req.params;
  const { toDo } = req.body;
  ToDoModel.findByIdAndUpdate(id, { toDo })
    .then(() => {
      console.log("UPDATED SUCCESSFULLY");
      res.send("UPDATED SUCCESSFULLY");
    })
    .catch((err) => {
      console.log(err);
      res.send({ error: err, msg: "Something Went Wrong (UPDATION)☹" });
    });
};

// DELETE TODOS

module.exports.deleteToDo = (req, res) => {
  const { id } = req.params;

  ToDoModel.findByIdAndDelete(id)
    .then(() => {
      console.log("DELETED SUCCESSFULLY");
      res.send("DELETED SUCCESSFULLY");
    })
    .catch((err) => {
      console.log(err);
      res.send({ error: err, msg: "Something Went Wrong (DELETION)☹" });
    });
};
