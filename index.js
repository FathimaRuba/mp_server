// importing statement
const jsonserver = require('json-server')

// creating server
const myServer = jsonserver.create()

// configure server / initialize middleware and router
const middleware = jsonserver.defaults() // middleware is a fn that acts between client/request and server. it checks requests before reaching to server for any attacks/defects.
const router = jsonserver.router('db.json') // add/retrieve to/from server

// to configure middleware and router to server
myServer.use(middleware)
myServer.use(router)

// set port no
const PORT = 3000 || process.env.PORT

// calling listen method with server to run/activate server
myServer.listen(PORT,()=>{
    console.log("serving running at portno:"+PORT);  
})
