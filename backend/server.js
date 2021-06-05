require("dotenv").config({path:"./config.env"})
const express = require("express");
const app = express();
require("./config/db")
const port = process.env.PORT || 5001;
const cors = require("cors")
const path = require("path");
const restApi = require("./routes/apiRoutes")
const myWebsiteRoute = require("./routes/myWebsiteRoute")

app.use(express.json())

app.use(cors({origin:"*"}))

app.use("/restapi", restApi)

app.use("/api/mywebsite", myWebsiteRoute)


if (process.env.NODE_ENV == "production") {
    const reactPath= path.join(__dirname,"../client/build")
    app.use(express.static(reactPath));
    app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));

    })
}


app.listen(port, () => console.log(`Server running at the port ${port}`))