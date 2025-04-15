import React from 'react';
import './App.css';

// https://www.npmjs.com/package/react-xmlObj-parser
var XMLParser = require('react-xml-parser');
/*
Methods that are currently supported:
parseFromString(string): Returns an XML object as described in the example outputJsonArray that represents the input text.
toString(XML object): Returns text representation of an input XML.
getElementsByTagName(string): Returns all tags with the same name as the method's input string (case-insensitive). for all possible tags, use '*' as input.
*/



function App() {

  // input
  var inputRawXml = `<!DOCTYPE html><html><head><title>Data</title></head><div><ul><li>body&nbsp;<ul><li>items&nbsp;<ol><li><ul><li>name&nbsp;AdminServer</li><li>state&nbsp;RUNNING</li><li>health&nbsp;HEALTH_OK</li></ul></li><li><ul><li>name&nbsp;track61800-01</li><li>state&nbsp;RUNNING</li><li>health&nbsp;HEALTH_OK</li></ul></li><li><ul><li>name&nbsp;track61800-02</li><li>state&nbsp;RUNNING</li><li>health&nbsp;HEALTH_OK</li></ul></li><li><ul><li>name&nbsp;track61800-03</li><li>state&nbsp;RUNNING</li><li>health&nbsp;HEALTH_OK</li></ul></li></ol></li></ul></li><li>messages&nbsp;<ol></ol></li></ul></div></body></html>`

  // remove doctype (which is not part of xmlObj) from html
  inputRawXml.replace('<!DOCTYPE html>', '');

  // build xml object
  var xmlObj = new XMLParser().parseFromString(inputRawXml);    // Assume inputRawXml contains the example XML

  // get json object from li elements
  var jsonObj = xmlObj.getElementsByTagName('li');
  // console.log(jsonObj);

  // build the output
  //    let outputJsonArray = [
  //      { "APP":"GOLF", "SERVER": "AdminServer","STATE": "RUNNING","HEALTH": "HEALTH_OK" },
  //      { "APP":"GOLF", "SERVER": "track61800-01","STATE": "RUNNING","HEALTH": "HEALTH_OK" },
  //      { "APP":"GOLF", "SERVER": "track61800-02","STATE": "RUNNING","HEALTH": "HEALTH_OK" },
  //      { "APP":"GOLF", "SERVER": "track61800-03","STATE": "RUNNING","HEALTH": "HEALTH_OK" }
  //    ];
  let outputJsonArray = [];
  let obj1 = {};
  for (var i = 0; i < jsonObj.length; i++) {
    var arr = jsonObj[i].value.split('&nbsp;');
    switch (arr[0]) {
      case 'name':
        obj1 = {
          "APP": "GOLF"
        };
        obj1[arr[0]] = arr[1];
        break;
      case 'state':
        obj1[arr[0]] = arr[1];
        break;
      case 'health':
        obj1[arr[0]] = arr[1];
        outputJsonArray.push(obj1);
        break;
      default:
        break;
    }
  }
  // console.log(outputJsonArray);

  return (
    <div className="App">
      <header className="App-header">
        <p>
          {JSON.stringify(outputJsonArray)}
        </p>
      </header>
    </div>
  );
}

export default App;
