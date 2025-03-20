const express = require("express");
const app = express();
const path = require("path");

const PORT = 3000;

// Middleware to parse JSON and serve static files
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

// Route to handle addition
app.post("/calculate", (req, res) => {
    let { num1, num2 } = req.body;
    let sum = Number(num1) + Number(num2);
    res.json({ result: sum });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
