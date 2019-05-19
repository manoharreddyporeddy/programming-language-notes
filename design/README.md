All about software developemnt and software

<pre>

# all-about-software-development
---
-----------------------------------------------

		

-----------------------------------------------
# Mathematics
-----------------------------------------------
# Data structures
-----------------------------------------------
# Algorithms

-----------------------------------------------


# fan out/ fan in

the code can fan out and call various Activity Functions (tasks = durableOrchestrationContext.CallFunctionAsync)
wait for them all to complete (await Task.WhenAll), and then 
allow you to sum the results (fan in) (tasks.Sum(t => t.Result))

-----------------------------------------------



# good code stategies?

# logging level

0. log level matters for performance

1. dev,qa,prod environment

  prod will have error level
    important log messages at error level
    
  since prod will have error level, have dev & qa at error level (occasionally see if verbose level is working fine)

2. local environment (computer/laptop)

    log messages at verbose level
  
3. log levels must be externally controllable

  form environment variables, dev.config, host.json file, etc.
  restart application is generally done when doing above as a best practice


# time stamps

  all important operations, must be having TIME TAKEN logs, which tell how much time they took - save time for customer and cost


-----------------------------------------------

Printer in Windows XP is
	Logical software entitiy
		Print Device +
		Print DRIVER +
		Spooler

		Computer 1 side:
			prints a paper in Word, Power Point, etc.
				sends Print Job
		Printer side:
			Spooler
				receives the print job
				sends to Print DRIVER
					Print DRIVER
						reformat the data into a Print Device langauge (Postscript, PCL, etc.)
				receives formatted data from Print DRIVER
				stores in file on harddisk of Spooler - now Job is spooled
				send the job to Print Device via a queue
					Print Device
						print page
				note: via a configuration, spooler can send pages to Print Device, while it works with spooler for further pages reformatting.

	connect to computer
		install driver
			printer interfaces
				serial printer - very old - very slow for large documents as it sends 1 bit at a time, difficult configuration, convinient as it has very long cable (PC & printer can be very distant)
				SCSI - mostly professionaly used - difficult configuration
				parallel port based printer - mostly only one parallel port - most used in homes too - not plug & play - manually install from control panel (CD may be required)
				USB (Universal Serial Bus) based - mostly comes in multiple USB ports - plug & play - automatically connect to computer - 480 Mb/second data sent
				Firewire - similar to USB - 400 or 800 Mb/s - hasn't caught on as strongly as USB
				Infrared interface - no cable - but line of sight to printer should not be blocked by other phyiscal objects, also 1+ meter may have problems, secruity concerns as data is in air as others with IR port can see what is being printed.
				WIRELESS - similar to Infrared interface, but uses Radio signal - no issues with physical obsticales in middle, can be in another room - signals can be encrypted
				NETWORK - uses network card to send job - 
			printers
				      laser printer - black & while for regular documents
				color laser printer - possibly for photo prints
				solid ink printer - for brochures/ flyers
		install Printer DRIVER
		print test page
			setup your monitor to see the colors correctly
			download test page
			callibrate (how the colors look in the print out) - must needed required for color printer

		tcp/ip addressing
			https://www.youtube.com/watch?v=IYQ2mfnGnOk&list=PLdFppKg4UodjGN8nAhojxWyncoEdwTfqf&index=9
			IPv4 IPv6
			IPv4
				octet,octet,octet,octet
				subnet mask
				network + host
				A	(0-126)			n hhh
				B	128-191			nn hh
				C	192-223			nnn h
				D	224-239		MULTICAST GROUP
				E	240-255		EXPERIMENTAL

Firewall
	software or hardware (firewall device/ computer) or both
		sits between
			internal network
			and
			outside external network/ internet
	types:
		network firewall/ network-based firewall	- (hardware) - internal network of computer/system connected to internet
		host-based firewall							- (software) - single computer/system connected to internet
	2 interfaces
		1 connected to internal network
		1 connected to external network
	software or hardware (firewall device/ computer) or both
		sits between
			internal network
			and
			outside external network/ internet
		runs set of rules
			to determine wether or not
				traffic/ data/ request
					(http, ftp, etc.)
				from/to
					internal network, and
					outside external network
				is allowed/ not
	layered firewall
		multiple firewall, one behind the other - for better security
	connect to internet via
		modem
		network
		DSL line
		cable modem

https://en.wikipedia.org/wiki/ACID
https://en.wikipedia.org/wiki/SOLID_(object-oriented_design)
https://en.wikipedia.org/wiki/Create,_read,_update_and_delete
https://en.wikipedia.org/wiki/CAP_theorem

<code  style="white-space: pre-wrap; word-break: break-all; overflow-wrap: break-word; display: block;">
</code>
</pre>
