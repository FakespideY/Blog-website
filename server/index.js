//imports
import express from "express";
import Connection from "./database/db.js";
import dotenv from "dotenv";
const app = express();
const PORT = 8080;

app.listen(PORT, () => {
  console.log(`server is running on localhost:${PORT}`);
});

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

Connection(USERNAME, PASSWORD);
