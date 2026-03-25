/* 
	? Dotenv
	* dependency allowing us to store secrets in an .env file
	* the .env file doesn't get pushed anywhere
	* the contents of the file get loaded using process.env
*/
require("dotenv").config()
const express = require("express")
const app = express()

// console.log(process.env)

const PORT = process.env.PORT
const HOST = process.env.HOST

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

app.get("/nextsteps", (req, res) => {
	res.sendFile(`${public}/last.html`)
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
	* that endpoint should serve another page with some content
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