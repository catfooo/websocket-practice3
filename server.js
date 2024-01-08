console.log('Server started')
const WebSocket = require('ws')

// const server = new WebSocket.Server({ port: 3000 })
const server = new WebSocket.Server({ port: 3001 })

server.on('connection', (socket) => {
    console.log('Client connected')

    // send a msg to the client when connected
    socket.send('hello client')

    // handle messages from clients
    socket.on('message', (message) => {
        console.log(`Received message: ${message}`)
         // echo the msg
         socket.send(`You said: ${message}`)
    })

    // // echo the msg
    // socket.send(`You said: ${message}`)

    // handle connection closing
    socket.on('close', () => {
        console.log('Client disconnected')
    })
})