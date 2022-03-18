const express = require('express');
const app = express()
const cors = require("cors")
const port = 9000

app.use(express.json())
app.use(cors())
app.use("/auth",require("./routes/jwtAuth"))
app.use("/dashboard",require("./routes/dashboard"))

app.get('/',(req,res)=>{
    res.send("Home page")
})


app.listen(port,()=>{
    console.log(`server is running on port ${port}` );
})