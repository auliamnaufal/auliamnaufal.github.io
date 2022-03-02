const http = require('http')
const fs = require('fs')
const port = 3000

const renderHTML = (path, res) => {
	fs.readFile(path, (err, data) => {
		if(err){
			res.writeHead(404)
			res.write('Error, Page Not Found')
		} else {
			res.write(data)
		}
		res.end()
	})
}

http.createServer((req, res) => {
	res.writeHead(200, {
		'Content-Type' : 'text/html'
	})
	const url = req.url


	switch(url) {
		case '/about':
			renderHTML('./page/about.html', res)
			break
		case '/info':
			renderHTML('./info.html', res)
			break
		default:
			renderHTML('./page/index.html', res)
			break
	}

}) .listen(port, () => {
	console.log(`Server is listening on port ${port}...`)
})