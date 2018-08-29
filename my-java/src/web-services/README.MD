
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

A servlet is used
	to transport HTTP requests and resonses.
	It can be used
		to write a web application with JSPs and HTML, or
		to serve XML and JSON responses (as in a RESTful service) and
		to receive and return SOAP messages.
			one layer below web services.
		Servlets have their own standard which is currently the Java Servlet Specification Version 3.1
			https://java.net/downloads/servlet-spec/Final/servlet-3_1-final-change-bar.pdf
			https://javaee.github.io/servlet-spec/DOWNLOADS.html
