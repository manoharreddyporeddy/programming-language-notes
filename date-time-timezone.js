
	var dateString = (new Date()).toString(); console.log(dateString);
	// Fri Dec 29 2017 14:49:04 GMT+0530 (India Standard Time)

	var UTCstring = (new Date()).toUTCString(); console.log(UTCstring);
	// Fri, 29 Dec 2017 09:19:07 GMT

	var ISOString = (new Date()).toISOString(); console.log(ISOString);
	// 2017-12-29T09:18:43.180Z


	// DON'T USE THIS ONE - BEGIN
	// Note: toGMTString() is deprecated and should no longer be used.
	var GMTString = (new Date()).toGMTString(); console.log(GMTString);
	// Fri, 29 Dec 2017 09:21:16 GMT
	// DON'T USE THIS ONE - END
