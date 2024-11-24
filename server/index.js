const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const app = express();
const PORT = 9000;

app.use(cors({ origin: "https://tasks33-r2ri.vercel.app", credentials: true }));
app.use(cookieParser());
app.use(express.json());


app.get("/set-cookie", (req, res) => {
    res.cookie("name", "sonusingh", { httpOnly: true });
    res.status(200).json({ message: "Cookie has been set" });
});



app.get("/get-cookie", (req, res) => {
    const cookie = req.cookies.name;
    if (cookie) {
        res.status(200).json({ cookie });
    } else {
        res.status(404).json({ message: "Cookie not found" });
    }
});



app.get("/response/200", (req, res) => res.status(200).json({ message: "OK" }));
app.get("/response/201", (req, res) => res.status(201).json({ message: "Created" }));
app.get("/response/400", (req, res) => res.status(400).json({ message: "Bad Request" }));
app.get("/response/404", (req, res) => res.status(404).json({ message: "Not Found" }));
app.get("/response/500", (req, res) => res.status(500).json({ message: "Internal Server Error" }));





app.listen(PORT, () => console.log(`Server running on ${PORT}`));
