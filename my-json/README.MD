JavaScript Object Notation/ JSON

	It was derived from JavaScript
	commonly used with JavaScript
	many programming languages include code to generate and parse JSON-format data
		Code for parsing and generating JSON data is readily available in many programming languages.
		JSON's website lists JSON libraries by language
			https://www.json.org/

	a language-independent data format
	an open-standard file format
		that uses human-readable text
		to transmit data objects
			consisting of
				attribute–value pairs and
				array data types (or any other serializable value).

	JSON filenames use the extension .json
	Official Internet media type for JSON is application/json

	It is a very common data format used for
		asynchronous browser–server communication,
		including as a replacement for XML in some AJAX-style systems.[2]


	Douglas Crockford
		originally specified the JSON format
			in the early 2000s

	Two competing standards,
		RFC 8259 and	(covers some security and interoperability considerations)
		ECMA-404,[3]	(ECMA standard describes only the allowed syntax)
			defined it in 2017

	A restricted profile of JSON,
		known as I-JSON (short for "Internet JSON"),
		seeks to overcome some of the interoperability problems with JSON.
		It is defined in RFC 7493.[5]


JSON's basic data types:
	Number
		signed	decimal number
			may contain
				a fractional part and
				exponential E notation,
			
			cannot include non-numbers such as NaN.
			
			makes no distinction between integer and floating-point.
			
			JavaScript uses a
				double-precision  floating-point format
					for all its numeric values,
			Other languages
				implementing JSON
				may encode numbers differently.

	String
		sequence of
			zero or more
			Unicode characters

		Strings are
			delimited with
				double-quotation marks and
			support
				a backslash escaping  syntax.

	Boolean:
		either of the values
			true, or
			false

	Array:
		an  ordered
			list of
				zero or more
				values,
					each of which
						may be of
							any type
		use
			square bracket  notation and
			elements  are comma-separated

	Object:
		an unordered  collection of
			name–value pairs
			where
				the names (also called keys) are strings.

		Since objects are intended
			to represent associative arrays,
				it is recommended,
					though not required,[15] that each key is unique within an object.

		Objects are
			delimited with
				curly brackets and
				use commas  to separate  each pair,

		while within  each pair
			the colon ':' character
				separates
					the  key or name
					from its  value.

	null:
		An empty value,
			using the word
				null


	Limited whitespace is
		allowed and ignored
			around or between
				syntactic elements
					(values and punctuation,
						but not
							within a string value).

		Only four specific characters are considered whitespace for this purpose:
			space,
			horizontal tab,
			line feed, and
			carriage return

		In particular,
			the byte order mark (https://en.wikipedia.org/wiki/Byte_order_mark)
				must not be
					generated
					by a conforming implementation
						(though it may be accepted when parsing JSON)

		JSON
			does not
			provide
				syntax for comments.

		Early versions of JSON (such as specified by RFC 4627)
			required that
				a valid JSON "document"
				must consist of
					only an object or
					an array type,
						which could contain
							other types
								within them.

undefined?



Data portability issues
	Although Douglas Crockford originally asserted that JSON is a strict subset of JavaScript, his specification actually allows valid JSON documents that are invalid JavaScript. Specifically, JSON allows the Unicode line terminators U+2028 LINE SEPARATOR and U+2029 PARAGRAPH SEPARATOR to appear unescaped in quoted strings, while JavaScript does not.[16] This is a consequence of JSON disallowing only "control characters". For maximum portability, these characters should be backslash-escaped. This subtlety is important when generating JSONP.

	JSON exchange in an open ecosystem must be encoded in UTF-8.[17] The encoding supports the full Unicode character set, including those characters outside the Basic Multilingual Plane (U+10000 to U+10FFFF). However, if escaped, those characters must be written using UTF-16 surrogate pairs, a detail missed by some JSON parsers. For example, to include the Emoji character U+1F602 😂 FACE WITH TEARS OF JOY in JSON:

	{ "face": "😂" }
	// or
	{ "face": "\uD83D\uDE02" }

	Numbers in JSON are agnostic
		with regard to their representation
		within programming languages.
			No differentiation is made between
				an integer and
				floating-point value:
					some implementations may treat
						42, 42.0, and 4.2E+1
						as the same number while others may not.

	Furthermore,
		no requirements
			are made regarding implementation issues such as
				overflow,
				underflow,
				loss of precision, or
				rounding.

	Additionally,
		JSON says nothing
			about the
			treatment of signed zeros:
				whether 0.0 is distinct from -0.0.
					Most implementations that use
						the IEEE 754 floating-point standard,
							including JavaScript,
								preserve signed zeros;
									but not all JSON implementations may do so.

convert string to JSON
	var json1 = JSON.parse(string1);

convert JSON to string
	var string1 = JSON.parse(json1);

Unsupported native data types of JavaScript
	JavaScript syntax defines
		several native data types
		that are
			not included in the JSON standard:
				Date,
				Function,
				Error,
				Promise,
				Regular Expression,
				undefined,
				Set,
				Map,

					These JavaScript data types
						must be
							represented by
								some other data format,
									with the programs on both ends
										agreeing on
										how to convert between the types.
						As of 2011, there are some de facto standards,
							e.g., converting from Date to String,
								but none universally recognized.
	Other languages may have
		a different set of native types
			that must be
				serialized carefully
				to deal with
					this type of conversion



JSON Schema
	specifies a JSON-based format to
		define the structure of JSON data
			for
				validation,
				documentation, and
				interaction control
	provides a contract
		for the JSON data
			required by a
				given application, and
		how that data
			can be modified.

	is based on the concepts from XML Schema (XSD),
		but is JSON-based

		As in XSD,
			the same serialization/deserialization tools
				can be used both for the
				schema and data; and
				is self-describing.

					It is described in an Internet Draft currently in its 6th draft,
						which was released on April 15, 2017
							Draft 4 expired on August 4, 2013
								but continued to be used
									in the lapse of more than 3 years between
										its expiration and the release of Draft 5.

					There are
						several
							validators
								available for
									different programming languages,
									each with
										varying levels of
											conformance.

	There is
		no standard file extension, but
		some have suggested
			.schema.json.











