const express = require("express")
const app = express()

const PORT = 4000
const HOST = "127.0.0.1"

// How to define absolute path of our project? Coming from Node
const public = `${__dirname}/public`

app.use("/", express.static(public))

// app.get("/", (req, res) => {
// 	res.sendFile(`${public}/index.html`)
// })


app.listen(PORT, HOST, () => {
	console.log(`[server] listening on ${HOST}:${PORT}`)
})

/* 
	? An off topic tangent -- Buffer
	* fixed size memory store
	* it stores bytes (8 bits per byte)
	* more efficient
	* faster and lower level
*/

let firstName = "Stuart"
// console.log(firstName)

let fNameBuf = Buffer.from(firstName)
// console.log(fNameBuf)

// console.log(fNameBuf.toString())