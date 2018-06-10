const https = require('https');
var express = require('express')
var router = express.Router()

let bookName = "";
let maxResults = 10;
let startIndex = 0;

let url = "https://www.googleapis.com/books/v1/volumes?q={{bookName}}&maxResults={{maxResults}}&startIndex={{startIndex}}";

// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now())
  next()
})

// define the home page route
router.get('/', function (req, res) {

	
	bookName = req.query.bookName
	maxResults = req.query.maxResults
	startIndex = req.query.startIndex
	
    let actual_url = url
            .replace("{{bookName}}", bookName)
            .replace("{{maxResults}}", maxResults)
            .replace("{{startIndex}}", startIndex);

	loadDoc(req, res, actual_url);

})
// define the about route
router.get('/about', function (req, res) {
  res.send('About')
})


function loadDoc(req, res, url) {
	
	https.get(url, (resp) => {
	  let data = '';
	 
	  // A chunk of data has been recieved.
	  resp.on('data', (chunk) => {
		data += chunk;
	  });
	 
	  // The whole response has been received. Print out the result.
	  resp.on('end', () => {
		console.log( "bookName: " + bookName + ", maxResults: " + maxResults + ", startIndex: " + startIndex + ", actual: " + JSON.parse(data).items.length );
		res.send(data)
	  });
	 
	}).on("error", (err) => {
		console.log("Error: " + err.message);
		res.send(JSON.stringify(err.message))
	});
	
	return;
	
	
	
	
	
	/*
	
	
	
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {

            getEle("resultsDiv").innerHTML = this.responseText;
			res.send(JSON.stringify(this.responseText))
			
            // responseJson = JSON.parse(this.responseText);
            //var x = document.getElementById("resultsTable").rows.length;
            //var x = document.getElementById("resultsTable").rows[0].cells[0].length;
            //var x = document.getElementById("resultsTable").rows[0].cells[0].innerHTML = "hello";
        }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
	*/
}

module.exports = router
