import { useEffect } from "react";
import io from 'socket.io-client'

const App = () => {
    useEffect(() => {
        // const socket = new WebSocket('ws://localhost:3000')
        // const socket = new WebSocket('ws://localhost:3001')
        // const socket = io('ws://localhost:3001')
        const socket = io('http://localhost:3001')

        // socket.addEventListener('open', (event) => {
        //     console.log('WebSocket connection opened')
        //     socket.send('Hello, server!')
        // })
        socket.on('connect', () => {
            console.log('Socket.IO connection opened')
            socket.emit('message', 'Hello, server!')
        })

        // socket.addEventListener('message', (event) => {
        //     console.log(`Received message from server: ${event.data}`)
        // })
        socket.on('message', (data) => {
            console.log(`Received message from server: ${data}`)
        })

        // socket.addEventListener('close', (event) => {
        //     console.log('WebSocket connection closed')
        // })
        socket.on('disconnect', () => {
            console.log('Socket.IO connection closed')
        })

        // socket.addEventListener('error', (event) => {
        //     console.error('WebSocket error:', event)
        // })
        socket.on('error', (error) => {
            console.error('Socket.IO error:', error)
        })

        // clean up connection when component unmounts
        return () => {
            socket.close()
        }
    }, []) // empty dependency array to make sure the effect runs only once on mount

    return (
        <div>
            <h1>to run socketio</h1>
        </div>
    )
}

export default App