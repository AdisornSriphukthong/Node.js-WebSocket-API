import * as readline from 'readline'
import WebSocket from 'ws'

const port = 1234
const ws = new WebSocket(`ws://localhost:${port}`)

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function connection() {
    try {
        ws.on('open', () => {
            console.log('Connected')
            function question() {
                rl.question('', (data) => {
                    ws.send(data)
                    question()
                })
            }
            question()
        })
    } catch (error) {
        console.log(error)
    }
}

connection()

ws.on('message', (data) => {
    if(data) {
        console.log(`Server: ${data}`)
    }
})