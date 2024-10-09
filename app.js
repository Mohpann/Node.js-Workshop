const express = require("express")
const app = express()

// Tell express to use EJS as the view engine
app.set('view engine', 'ejs')
app.use(logger) // Use the logger function
app.use(express.static("public")) // Serve static files from the public directory

app.get("/", (req,res) => {
  res.render("index", { text: "World"})
}) 
// Whenever someone makes a GET request to the homepage send HTTP status code 200 and a message

const userRouter = require('./routes/users') // import router from its location

app.use('/users', userRouter) // link route to the /users path (middleware)
function logger(req, res, next) {
  console.log(req.originalUrl) // print current url
  next()
}

app.listen(3000)