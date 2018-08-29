
-------------
links

https://www.eclipse.org/webtools/
https://www.eclipse.org/webtools/jst/main.php
https://www.eclipse.org/webtools/server/

https://docs.oracle.com/javaee/5/api/javax/xml/bind/annotation/XmlRootElement.html
https://en.wikipedia.org/wiki/Data_access_object
https://javaee.github.io/servlet-spec/DOWNLOADS.html
https://jcp.org/en/jsr/detail?id=370
https://stackoverflow.com/questions/5930795/difference-between-servlet-and-web-service
https://www.tutorialspoint.com/restful/restful_methods.htm
https://www.tutorialspoint.com/restful/restful_environment.htm
https://www.tutorialspoint.com/restful/restful_first_application.htm
OLD https://wiki.eclipse.org/Creating_a_JAX-RS_Web_Service

<pre>
-------------

Web service	- service that exposes API/methods to web
Web app		- application that uses web service, and show UI for user interaction 

Java Web Services at
	low level
		Servlets
	high level
		XML-based like SOAP	- Example:	JAX-WS  (Java API for, XML Web Services, like SOAP)
		REST-based			- Example:	JAX-RS  (Java API for, RESTful Web Services)
-------------

Dynamic Web Project - Directory structure

	Java Servlet API requirements
		requests being processed by some logic provided by your application.
			ApplicationName
			|
			|_Java Resources
			|__src\
			|	|_packagename
			|		_servlets
			|		_.java files with classes
			|			entity classes
			|			db classes
			|			other busines class
			|__build\classes
			|	output folder / default
			|_WebContent
			|__META-INF
				  |_MANIFEST.MF
			|__WEB-INF - contents are only accessible by the server - pages that do not go to public
				  |_web.xml       <-- Here is the configuration file of your web app (where you define servlets, filters, listeners)
				  |_classes (classpath)  <-- Here goes all the classes of your webapp, following the package structure you defined. Only 
											frameworks (struts, spring, hibernate) configuration files
											present in any web-app
											compiled .java files 
				  |_lib           <--	jars
										libraries (jars) your application need. maven manages dependencies (automatically copies the needed jar files to the WEB-INF/lib folder) in maven project.
										application level (not system level) 3rd party libraries
					((WEB-INF))
						A special directory exists within the application hierarchy named  WEB-INF.
							contains all things related to the application that aren’t in the document root of the application.
							The WEB-INF node directory
								not part of the public document tree of the application.
								No file contained in the WEB-INF directory may be served directly to a client by the container.
								NOTE: servlet 3.0 can can serve 
								are visible to servlet code using the
									getResource and
									getResourceAsStream method calls
										on the ServletContext,
										and may be exposed using the RequestDispatcher calls.

							WEB-INF/classes folder will contain
								all compiled java classes and
								resources (src/main/java and src/main/resources) that
									need to be loaded by the Classloader to start the application.

										
				  your resources (JSP files, plain text files, script files)
				  authorization restrictions
				  
			JSP or facelets
			application root directory
				direct access from their browser


			The Servlet container/ application server
				If you use Apache Tomcat,
					root directory of your application must be placed in the webapp folder

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
</pre>
				Endpoint.publish("http://localhost:8089/myservice", new MyWebService());
<pre>
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
</pre>
			https://java.net/downloads/servlet-spec/Final/servlet-3_1-final-change-bar.pdf
			https://javaee.github.io/servlet-spec/DOWNLOADS.html
<pre>

A more comprehensive and practical approach is
	to write a web service with a framework and
	to publish it on an application server or servlet container
		such as Tomcat or JBoss.
			In this case you would use a
				Servlet to handle the transport of the HTTP requests
					which transmit your SOAP or REST messages.

To write a web service with servlet technology
	use
		JAX-WS (XML based - e.g. SOAP)
In order to write RESTful services,
	use
		JAX-RS
			using Jersey
				reference implementation is Jersey
</pre>
					https://jersey.github.io/download.html
<pre>
			OR
			using Apache WINK JAX-RS implementation library:
				NOTE: Apache Wink has been **RETIRED**.
</pre>
				https://wiki.eclipse.org/Creating_a_JAX-RS_Web_Service
<pre>
			OR
			using Spring WebMVC, but afaik that is not the main purpose of this framework
					@Controller annotation is a Spring specific stereotype annotation that tells Spring something about what your bean is supposed to do.
				Jersey is considerably easier to use.
				JAX-RS
					File → export → Web → War File
						C:\Program Files\Apache Software Foundation\Tomcat 9.0\webapps\UserManagement.war

A class that is annotated with @Controller is not yet a servlet, it is simply a bean.
How you use servlets depends mainly on the Framework that you use.
	For example, when you use Spring, the servlet job is done by Springs DispatcherServlet which in turn forwards requests to the correct beans.
	If you use Tomcat, then
		directly write your own servlets
		by simply 
			subclassing the javax.servlet.http.HttpServlet class and
			overwriting the necessary methods
				such as doGet which responds to HTTP GET requests from your browser.

</pre>

Sample links that open when running local

http://localhost:13755/proj1/services/cls1
http://localhost:8080/proj1Client/sampleCls1Proxy/TestClient.jsp?endpoint=http://localhost:13755/proj1/services/cls1
http://localhost:8080/wpa1Client/sampleCls1Proxy/TestClient.jsp?endpoint=http://localhost:9537/wpa1/services/Cls1

<pre>
----------------
As far as I understand,
	classpath
		points to class files (or, rather, the folders/jars/zips containing them)
	modulepath
		points to modules, which all contain module-info.java. Modules: </pre>
https://blog.andresteingress.com/2017/09/29/java-9-modules.html
<pre>

----------------
</pre>
