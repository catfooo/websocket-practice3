import { useEffect } from "react";

const App = () => {
    useEffect(() => {
        // const socket = new WebSocket('ws://localhost:3000')
        const socket = new WebSocket('ws://localhost:3001')

        socket.addEventListener('open', (event) => {
            console.log('WebSocket connection opened')
            socket.send('Hello, server!')
        })

        socket.addEventListener('message', (event) => {
            console.log(`Received message from server: ${event.data}`)
        })

        socket.addEventListener('close', (event) => {
            console.log('WebSocket connection closed')
        })

        // clean up connection when component unmounts
        return () => {
            socket.close()
        }
    }, []) // empty dependency array to make sure the effect runs only once on mount

    return (
        <div>
            <h1>to run websocket</h1>
        </div>
    )
}

export default App