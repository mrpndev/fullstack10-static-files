const express = require("express")
const app = express()

const PORT = 4000
const HOST = "127.0.0.1"

// How to define absolute path of our project? Coming from Node
const public = `${__dirname}/public`

// .use() is a middleware allowing us access to express.static middleware
app.use("/", express.static(public))

// If you want to follow prior pattern, can use .sendFile method off res object

// app.get("/", (req, res) => {
// 	res.sendFile(`${public}/index.html`)
// })

app.get("/form", (req, res) => {
	console.log(req)
	res.sendFile(`${public}/thankyou.html`)
})


app.listen(PORT, HOST, () => {
	console.log(`[server] listening on ${HOST}:${PORT}`)
})

/* 
	? Challenge
	* create another endpoint
	* this endpoint will be accessible from the /form page
	* the /form rendered page should have two things:
	* a button that says 'Go forth' that will take you to that new endpoint you created
	* a link that says 'go back' which will take you to back to the main page with the form
*/

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