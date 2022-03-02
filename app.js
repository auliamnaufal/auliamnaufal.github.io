const http = require("http");
const fs = require('fs')

const requestListener = (req, res) => {
	req.setHeader("Content-Type", "text/html");

	const { method, url } = req

	if (url === '/') {
		fs.writeFile('index.html')
		
	}
}

const server = http.createServer(requestListener)

const port = 3000
const host = 'localhost'

server.listen(port, host, () => {
	console.log(`Server berjalan pada port ${port}`)
})

