const express = require("express")
const router = express.Router() // mini app that lives inside this application
// router works the same as app
// Can use .send, .get, etc.

// Utilizing router to go route to new pages

router.get("/", (req, res) => {
    res.send("User List")
})
  
router.get("/new", (req, res) => {
    res.render("users/new", { firstName: "Test"})
})

router.post('/', (req, res) => { // Happens after button is clicked on /users/new
    res.send('Create User')
}) // Creates a user

router.route("/:id") // One route, multiple requests
    .get((req, res) => {
        console.log(req.user)
        res.send(`Get User with ID: ${req.params.id}`)
    })
    .put((req, res) => {
        res.send(`Put User with ID: ${req.params.id}`)
    })
    .delete((req, res) => {
        res.send(`Delete User with ID: ${req.params.id}`)
    })

const users = [
    { name: "Kyle", age: 30 },
    { name: "Sally", age: 25 }
]

router.param("id", (req, res, next, id) => {
    req.user = users[id]
    next()
})

// In order to use the router, export it
module.exports = router