const express = require('express');
const app = express();

app.get('/health', (req, res) => {
  res.status(200).json({ status: "ok", version: "1.0.0" });
});

app.get('/', (req, res) => {
  res.status(200).json({ message: "runner-logs-investigation API" });
});

module.exports = app;
