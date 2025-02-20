import { WebSocketServer } from "ws";
import * as readline from 'readline'

const port = 1234
const wss = new WebSocketServer({port})

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

wss.on('connection', (ws) => {
    ws.on('message', (data) => {
        console.log(`Client: ${data}`)
    })

    function question() {
        rl.question('', (data) => {
            ws.send(data)
            question()
        })
    }

    question()

})

console.log('Listening...')