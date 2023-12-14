import express, { Express, Request, Response } from "express";
const app: Express = express();
import mongoose from "mongoose";
import cors from "cors";
import { todoListModel } from "../model/TodoListModel";

app.use(cors());
app.use(express.json());

mongoose
  .connect(
    "mongodb+srv://lifeprocess:o3CmEcw0rLEfGiGb@todolistmern.qod1fdz.mongodb.net/mernTodoList?retryWrites=true&w=majority"
  )
  .then(() => console.log("Database connected"))
  .catch((err) => console.log(err));

app.get("/getTodoList", async (req: Request, res: Response) => {
  let data = await todoListModel.find({});
  //console.log(req.params);
  //console.log(data);
  res.send(data);
});

app.post("/createTodoList", async (req: Request, res: Response) => {
  const todoList = req.body;
  const newTodoList = new todoListModel(todoList);
  await newTodoList.save();
  res.send(newTodoList);
});

//Delete item from database
app.delete("/deleteTodoList/:id", async (req: Request, res: Response) => {
  try {
    //find the item by its id and delete it
    //console.log(req.params.id);
    const deleteItem = await todoListModel.findByIdAndDelete(req.params.id);
    res.status(200).json("Item Deleted");
  } catch (err) {
    console.log(req.params.id);
    res.json(err);
  }
});

//update item
app.put("/updateTodoList/:id", async (req, res) => {
  try {
    //find the item by its id and update it
    const updateItem = await todoListModel.findByIdAndUpdate(req.params.id, {
      $set: req.body,
    });

    res.status(200).json(updateItem);
  } catch (err) {
    res.json(err);
  }
});

app.listen(3000, () => {
  console.log("Server runs perfectly!");
});
