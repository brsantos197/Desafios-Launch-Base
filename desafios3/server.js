const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const data = require('./data')

server.use(express.static('public'))

server.set("view engine", "njk")

nunjucks.configure("views", {
    express: server
})

//rotas

server.get("/", function(req, res) {
    res.render("about") 
})

server.get("/courses", function(req, res) {
    res.render("courses", { data })
})

server.get("/courses/:id", function(req, res) {
    const id = req.params.id
    const course = data[id]
    return res.render("course", { item: course })
})

server.use(function(req, res) {
    res.status(404).render("not-found")
 })

server.listen(5500, function(){
    console.log("Server is running")
})
