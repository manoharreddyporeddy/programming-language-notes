"use strict";

let bookName = "";
let maxResults = 10;
let startIndex = 0;

let startTime, endTime;
let earliestPublctnDate, mostRecentPublctnDate;

let server = "http://localhost:3000";
let path = "/books?bookName={{bookName}}&maxResults={{maxResults}}&startIndex={{startIndex}}";
let url = server + path;

let responseJson = {};
function getEle(id) {
    return document.getElementById(id)
}
function onBodyLoad() {
    // alert("aa");
    getEle("previousButton").disabled = true;
    getEle("nextButton").disabled = true;
}
function onSubmit() {
    bookName = getEle("bookname").value;

    startIndex = 0;
    getEle("nextButton").disabled = false;
    getPage();
}
function onPrevious() {
    startIndex--;
    if (startIndex == 0) {
        getEle("previousButton").disabled = true;
    }
    getPage();
}
function onNext() {
    startIndex++;
    getEle("previousButton").disabled = false;
    getPage();
}
function getPage() {
    let actual_url = url
            .replace("{{bookName}}", bookName)
            .replace("{{maxResults}}", maxResults)
            .replace("{{startIndex}}", startIndex);

    console.log(actual_url);
    loadDoc(actual_url);
}
function displayResults() {

    earliestPublctnDate = undefined;
    mostRecentPublctnDate = undefined;

    let authorCount = {
    };

    // table
    var tableRef = document.getElementById("resultsTable").tBodies[0];
    tableRef.textContent = "";
    for (let item of responseJson.items) {
        var thisRow = tableRef.insertRow(tableRef.rows.length);

        let tcolIndex = 0;
        let authorsString = "";
        for (let author of item.volumeInfo.authors) {
            authorsString += author + ", ";

            if (authorCount[author.toLowerCase()] === undefined) {
                authorCount[author.toLowerCase()] = 1;
            } else {
                authorCount[author.toLowerCase()]++;
            }
        }
        thisRow.insertCell(tcolIndex++).appendChild(document.createTextNode(item.volumeInfo.title));
        thisRow.insertCell(tcolIndex++).appendChild(document.createTextNode(authorsString));

        thisRow.insertCell(tcolIndex++).appendChild(document.createTextNode(item.volumeInfo.publisher));
        thisRow.insertCell(tcolIndex++).appendChild(document.createTextNode(item.volumeInfo.publishedDate));

        let publishedDate = item.volumeInfo.publishedDate;
    // console.log("before " + publishedDate);
        let dateParts = publishedDate.split("-").length;
    // console.log("dateParts " + dateParts);
        switch (dateParts) {
            case 3:
                // good
                break;
            case 2:
                // day is missing, append -01
                publishedDate += "-01";
                break;
            case 1:
                // month & day is missing, append -01-01
                publishedDate += "-01-01";
                break;
            default:
                break;
        }
    // console.log("  after " + publishedDate);
        publishedDate = new Date(publishedDate);

        if ((earliestPublctnDate === undefined) ||
            (mostRecentPublctnDate === undefined)) {
            mostRecentPublctnDate = new Date(publishedDate);
            earliestPublctnDate = new Date(publishedDate);
        } else {
            if (publishedDate > mostRecentPublctnDate) {
                mostRecentPublctnDate = publishedDate;
            }
            if (publishedDate < earliestPublctnDate) {
                earliestPublctnDate = publishedDate;
            }
        }


    /*
        thisRow.insertCell(tcolIndex++).appendChild(document.createTextNode(item.volumeInfo.printType));
        thisRow.insertCell(tcolIndex++).appendChild(document.createTextNode(item.volumeInfo.pageCount));
    */

        let img = document.createElement("img");
        img.src = item.volumeInfo.imageLinks.smallThumbnail;
        thisRow.insertCell(tcolIndex++).appendChild(img);

    // thisRow.insertCell(tcolIndex++).appendChild(document.createTextNode(item.volumeInfo.language));

        let a = document.createElement("a");
        a.href = item.volumeInfo.infoLink;
        a.text = "More info";
        thisRow.insertCell(tcolIndex++).appendChild(a);
    // thisRow.insertCell(tcolIndex++)``.appendChild(document.createTextNode(item.accessInfo.textToSpeechPermission));
    }

    // summary
    let mostCommonAuthorCount = 0;
    let mostCommonAuthor = "";
    for (let author in authorCount) {
        if (authorCount[author] > mostCommonAuthorCount) {
            mostCommonAuthorCount = authorCount[author];
            mostCommonAuthor = author;
        }
    }


    getEle("resultsDiv").innerHTML =
        "<b>Summary of this page:</b><br>" +
        "Total Items: " + responseJson.totalItems + "<br/>" +
        "Most common Author: " + mostCommonAuthor.charAt(0).toUpperCase() + mostCommonAuthor.slice(1).toLowerCase() + "<br/>" +
        "Most Recent Publication Date: " + mostRecentPublctnDate.toString() + "<br/>" +
        "Earliest Publication Date: " + earliestPublctnDate.toString() + "<br/>" +
        "Server response time: " + (endTime - startTime) + " milli seconds <br/>";

    //var x = document.getElementById("resultsTable").tBodies[0].rows.length;
    //var x = document.getElementById("resultsTable").tBodies[0].rows[0].cells[0].length;
    //var x = document.getElementById("resultsTable").tBodies[0].rows[0].cells[0].innerHTML = "hello";
}

function loadDoc(url) {

    startTime = (new Date()).getTime();

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            endTime = (new Date()).getTime();


            getEle("resultsDiv").innerHTML = this.responseText;

            responseJson = JSON.parse(this.responseText);

            displayResults();
            //var x = document.getElementById("resultsTable").rows.length;
            //var x = document.getElementById("resultsTable").rows[0].cells[0].length;
            //var x = document.getElementById("resultsTable").rows[0].cells[0].innerHTML = "hello";
        }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
}
