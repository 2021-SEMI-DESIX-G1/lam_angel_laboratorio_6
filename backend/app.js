const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

const Data = [
  {
    name: "Erick Agrazal",
    age: 30,
    status: "active",
  },
  {
    name: "José Muñoz",
    age: 34,
    status: "active",
  },
  {
    name: "Iván Betegón",
    age: 28,
    status: "active",
  },
];

const Users = {
  getUsers: (req, res) => {
    res.json({
      model: "Users",
      count: Data.length,
      data: Data,
    });
  },
  getUser: (req, res) => {
    res.json(Data[req.params.id]);
  },
  createUser: (req, res) => {
    Data.push(req.body);
    res.json({
      model: "Users",
      count: Data.length,
      data: Data,
    });
  },
  updateUser: (req, res) => {
    Data[req.params.id] = req.body;
    res.json({
      model: "Users",
      count: Data.length,
      data: Data,
    });
  },
  deleteUser: (req, res) => {
    Data.splice(req.params.id, 1);
    res.json({
      model: "Users",
      count: Data.length,
      data: Data,
    });
  },
};

app.get("/api/v1/users/", Users.getUsers);
app.get("/api/v1/users/:id", Users.getUser);
app.post("/api/v1/users/", Users.createUser);
app.post("/api/v1/users/update/:id", Users.updateUser);
app.post("/api/v1/users/delete/:id", Users.deleteUser);

app.listen(port, () => {
  console.log(`Ejemplo escuchando en: http://localhost:${port}`);
});
