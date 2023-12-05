import express, { Express, Request, Response } from "express";
const app: Express = express();
import mongoose from "mongoose";
import cors from "cors";
import { todoListModel } from "../model/TodoListModel";

app.use(express.json());
app.use(cors());

mongoose.connect(
  "mongodb+srv://lifeprocess:o3CmEcw0rLEfGiGb@todolistmern.qod1fdz.mongodb.net/mernTodoList?retryWrites=true&w=majority"
);
app.get("/getTodoList", async (req: Request, res: Response) => {
  let data = await todoListModel.find({});
  console.log(data);
  res.send(data);
});
app.post("/createTodoList", async (req: Request, res: Response) => {
  const todoList = req.body;
  const newTodoList = new todoListModel(todoList);
  await newTodoList.save();

  res.send(newTodoList);
});

app.listen(3000, () => {
  console.log("Server runs perfectly!");
});
