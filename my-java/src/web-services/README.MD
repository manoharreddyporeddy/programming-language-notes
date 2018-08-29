
Web service is a
	service that provides
		service methods
		to its clients
			using either
				REST programming paradigm or
				SOAP protocol for communication.

Implement a web service
	Simple way to write a web service would be to
		write a class and
		annotate it with the @WebService and @WebMethod annotations from javax.jws, and
			then launch it from a main-method with:
				Endpoint.publish("http://localhost:8089/myservice", new MyWebService());
			The result is that you can view the WSDL at the registered URL and
				if you have SoapUI or any other SOAP client
					you can also test and
					use your web service.

