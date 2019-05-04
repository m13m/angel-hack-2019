// Include the cluster module
var cluster = require('cluster');

// Code to run if we're in the master process
if (cluster.isMaster) {

    // Count the machine's CPUs
    var cpuCount = require('os').cpus().length;

    // Create a worker for each CPU
    for (var i = 0; i < cpuCount; i += 1) {
        cluster.fork();
    }

    // Listen for terminating workers
    cluster.on('exit', function (worker) {

        // Replace the terminated workers
        console.log('Worker ' + worker.id + ' died :(');
        cluster.fork();

    });

// Code to run if we're in a worker process
} else {
	const express = require('express')
	const bodyParser = require('body-parser')
	let jsonData = require('./data.json')

	const app = express()
	//const db = require('./queries')
    const port = process.env.PORT || 3000;

	app.use(bodyParser.json())
	app.use(
	  bodyParser.urlencoded({
	    extended: true,
	  })
	)

	app.get('/', (request, response) => {
	  response.json({ info: 'Hello, world!' })
	})
	app.get('/all', (request, response) => {
		response.send(jsonData)
	})

	//app.get('/all', db.getUsers)


	app.listen(port, () => {
	  console.log(`App running on port ${port}.`)
	})
}