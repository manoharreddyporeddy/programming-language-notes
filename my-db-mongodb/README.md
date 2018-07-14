# my-mongodb-notes
my-mongodb-notes


# NEW DOCUMENTATION


---------------------------------
# installation

	download mongodb
		https://www.mongodb.com/download-center?jmp=nav#enterprise

		select
			"Community server" tab
				> "Windows
					> download


	MongoDB 4.0.0 2008R2Plus SSL (64 bit)


	Install MongoDB as a Service
	* Run service as Network Service user
	o Run service as local or domain user

	Service Name: MongoDB
	Data directory C:\Program Files\MongoDB\Server\4.0\data\
	Log  directory C:\Program Files\MongoDB\Server\4.0\log\



			NOTE: Install with old versions of mongodb:
				// server
				mongod
					MongoDB shell version v4.0.0
					connecting to: mongodb://127.0.0.1:27017
					MongoDB server version: 4.0.0
					
					show dbs;
						admin   0.000GB
						config  0.000GB
						local   0.000GB

				// client
				mongo
					show dbs;
					exit;

				start mongo as a server
					install config
						mongod --config "C:\data\mongo.cfg" --install
					start service
						net start mongodb
					stop service
						net stop mongodb


#2
	MongoDB Compass
		official GUI for MongoDB


---------------------------------

# shell commands

simple

	// hierarchy:
	//
	// 	dbs (like databases)
	//		> collections (like tables)
	//			> documents








    // ------------

    // start mongo client
    mongo

    // ------------
    
    // list all databases
    show dbs
    // NOTE: assume one of the databases is myNewDatabase
    
    // use the 'myNewDatabase' database
    use myNewDatabase
    
    // ------------
    
    // show all collections of 'myNewDatabase' database
    show collections
    // NOTE: assume one of the collections is 'myCollection'
    
    // show all documents of 'myCollection' collection
    db.myCollection.find()
    
    // ------------
    
    // keys
    Object.keys(db.myCollection.findOne());
    
    // values
    db.myCollection.find().forEach(function(doc) {
    	for (field in doc) {
    		print(doc[field]);
    	}
    });

    // ------------


	// print documents pretty
	db.myCollection.find().pretty()

	// same as above
	db.myCollection.find().forEach(function(doc) {
		printjson(doc);
	});	
	
	
    // ------------
	
	
	
	// delete the 'myCollection' collection
	db.myCollection.drop1()
	// NOTE: I have used drop1 instead of drop to eliminate accidental deletion
	// NOTE:		if you really want to delete, change "drop1" to "drop" in the above command

	// to get what all commands exists for 'myCollection' collection
	db.myCollection.help();


---------------------------------

detailed


	use db1;
	db;
	show collections;
		myCollection
	db.myCollection.find();
	db.createUser({
		user: "u1",
		pwd: "p1",
		roles: ["readWrite", "dbAdmin"]
	})
		// Successfully added user

	// collections/ tables
	db.createCollection("myCollection")
		// {ok: 1}
	show collections;
		// myCollection
	db.myCollection.insert({
		firstName: "fn1",
		lastName: "ln1"
	})
	db.myCollection.find();
	{"_id": ObjectId("23412341432"),
		"firstName": "fn1",
		lastName: "ln1"
		}

	db.myCollection.insert(
	[
	{
		firstName: "fn1",
		lastName: "ln1"
	},
	{
		firstName: "fn2",
		lastName: "ln2",
		gender: "male"
	}
	]
	)
	// BulkWriteResults ({ "writeErrors": [] ... })

	db.myCollection.find();
	//

	db.myCollection.find().pretty();
	//

	// match1 - way1 - overwrite doc - must give all existing field + new field
	db.myCollection.update(
	{firstName: "John"},
	{firstName: "John", lastName:"hello"}
	);
	//

	// match1 - way1 - overwrite doc - must give all existing field + new field
	db.myCollection.update(
	{firstName: "John"},
	{firstName: "John", lastName:"hello", gender:"male"}
	);
	//

	// match1 - way2 - add/modify field - $set: {} - give only new field
	db.myCollection.update(
	{firstName: "John"},
	{$set: {score:44}}
	);
	//

	// increment by 5
	db.myCollection.update(
	{firstName: "John"},
	{$inc: {score:5}}
	);

	// match1 - remove field - $unset: {} - give only new field
	db.myCollection.update(
	{firstName: "John"},
	{$unset: {score:1}}
	);
	//

	// upsert
	db.myCollection.update(
	{firstName: "John"},
	{firstName: "John", lastName: "lnnn"},
	{upsert: true}
	);
	//

	// rename
	db.myCollection.update(
	{firstName: "John"},
	{$rename: {score: score2}}
	);
	//

	// ----------------------------------------------------------
	// ----------------------------------------------------------

	// remove all document of something
	db.myCollection.remove(
	{firstName: "John"}
	);
	//

	// remove 1 document of something
	db.myCollection.remove(
	{firstName: "John"},
	{justOne: true}
	);
	//

	// ----------------------------------------------------------
	// ----------------------------------------------------------
	// find with $or: []
	db.myCollection.find(
	{
		$or: [
			{firstName: "John"},
			{firstName: "Johnny"}
		]
	}
	);
	//

	// find with $gt:nnn
	db.myCollection.find(
	{
		age:{
			{$lt: 40}
		}
	}
	);
	//

	// find within an object ("obj1.field1": '') - NOTE: double quotes for object is must
	db.myCollection.find(
	{
		"address.city": "boston"
	}
	);
	//

	// find within an array ("array1": 'arrayval1') - NOTE: double quotes for object is must
	db.myCollection.find(
	{
		"array1": "arrayval1"
	}
	);
	//

	// find - sort ascending - by a field
	db.myCollection.find().sort(
	{"firstName": 1}
	);
	//

	// find - sort descending - by a field
	db.myCollection.find().sort(
	{"firstName": -1}
	);
	//

	// find - count()
	db.myCollection.find().count();
	//

	// find - limit(nnn) - 1st nnn
	db.myCollection.find().limit(4)
	//

	// find - limit(nnn) 1st nnn - sort
	db.myCollection.find().limit(4).sort(
	{"firstName": 1}
	);
	//

	// find - limit(nnn) 1st nnn - sort
	db.myCollection.find().forEach(function(doc) { print("Customer name: " + doc.firstName) });
	//

---------------------------------








# ------------------------------------------------------------
# ------------------------------------------------------------
# ------------------------------------------------------------
# ------------------------------------------------------------
# ------------------------------------------------------------
# OLD DOCUMENT
# ------------------------------------------------------------
# ------------------------------------------------------------
# ------------------------------------------------------------
# ------------------------------------------------------------
# ------------------------------------------------------------

<pre>

#1
download & install
	Community Server
	https://www.mongodb.com/download-center#community

#2
start server
	mkdir c:\data\db
	mkdir c:\data\log
	"C:\Program Files\MongoDB\Server\3.4\bin\mongod.exe"

NOTE: Now the server is running

More:
	//   "C:\Program Files\MongoDB\Server\3.4\bin\mongod.exe" --dbpath d:\test\mongodb\data
	//   "C:\Program Files\MongoDB\Server\3.4\bin\mongod.exe" --dbpath "d:\test\mongo db data"
	//	(IF you want to run as service)
	//		"C:\Program Files\MongoDB\Server\3.4\bin\mongod.exe" --config "C:\Program Files\MongoDB\Server\3.4\mongod.cfg" --install

#3
start client
	"C:\Program Files\MongoDB\Server\3.4\bin\mongo.exe"

#4
run commands

	show tables
	show collections
	
	db.stats();
	db.help();

	db.test.save( { a: 1} )
	db.test.find()


</pre>






# More - Easier IDE & sample code

<pre>

#A
installign robomongo IDE
	https://robomongo.org/download
	> Download > Windows > "Download installer for Windows 64-bit"
	Install
		Next > Next > Finish

#B
Connecting to mongo db

1. Start Robot 3T from desktop icon

2. Ctrl + N  to get "MongoDB Connections" (do if required)

3. Create

	Name: localmongo
	Address: localhost		PORT: 27017
		Save

4. Connect

5. Right click on "test" database > Open shell

6. Run below commands (F5 to excute)

	db.stats();
	db.help();
	
	db.test.save( { a: 1, b: 2 } )
	db.test.find()


</pre>






<pre>

//
// 3 setup types:
//      Standalone MongoDB instance             https://docs.mongodb.com/manual/reference/program/mongod/#bin.mongod
//                 MongoDB replica set          https://docs.mongodb.com/manual/replication/
//                 MongoDB sharded clusters     https://docs.mongodb.com/manual/sharding/
//
// start "Standalone MongoDB instance"
//      "C:\Program Files\MongoDB\Server\3.4\bin\mongod.exe" --dbpath "C:\mongodb\standalone\data"
//
// using IDE Robo 3T
// to run
//       F5
//       CTRL + ENTER
// view the results in different modes
//      F2,F3,F4
//
//      db.mycol.find()
//      db.getCollection('mycol').find({})
//
//
// HELP:
//      https://docs.mongodb.com/manual/reference/method/db.collection.remove/

// 'test' is default database
//
// db        // always means currently selected db
// db.stats();
// db.test.save( { a: 1 } )
// db.test.find()

/*
    use mydb1	// create or use existing db
    db		// show currently selected db

    show dbs	// show all dbs
    db.movie.insert({"name":"tutorials point"})  // insert at least one document
    db.getCollectionNames();
    show dbs	// show all dbs
    
*/
// db;
// db.stats();

//      create or use existing db
//use mydb2
//      db.COLLECTION_NAME.insert(document)
//db.movie.insert({"name":"tutorials point"})  // insert at least one document
//db.getCollectionNames();
//db.dropDatabase()
//      { "dropped" : "mydb2", "ok" : 1.0 }

// use mydb1
// db.createCollection(name, options); // options about memory size and indexing
// db.createCollection('myColl1');
//      { "ok" : 1 }
// db.getCollection('movie');
// db.createCollection("mycol", { capped : true, autoIndexId : true, size : 6142800, max : 10000 } )
// show collections
// db.getCollectionNames();

// Field	Type	Description
// capped	Boolean	(Optional) If true, enables a capped collection. Capped collection is a fixed size collection that automatically overwrites its oldest entries when it reaches its maximum size. If you specify true, you need to specify size parameter also.
// autoIndexId	Boolean	(Optional) If true, automatically create index on _id field.s Default value is false.
// size	number	(Optional) Specifies a maximum size in bytes for a capped collection. If capped is true, then you need to specify this field also.
// max	number	(Optional) Specifies the maximum number of documents allowed in the capped collection.


// db.tutorialspoint.insert({"name" : "tutorialspoint"})  // creates collection automatically, when you insert some document.
// show collections
// db.tutorialspoint.drop();
// show collections


// https://www.tutorialspoint.com/mongodb/mongodb_datatype.htm






// 	MongoDB supports many datatypes. Some of them are −//
// String - This is the most commonly used datatype to store the data. String in MongoDB must be UTF-8 valid.
// Integer - This type is used to store a numerical value. Integer can be 32 bit or 64 bit depending upon your server.
// Boolean - This type is used to store a boolean (true/ false) value.
// Double - This type is used to store floating point values.
// Min/ Max keys - This type is used to compare a value against the lowest and highest BSON elements.
// Arrays - This type is used to store arrays or list or multiple values into one key.
// Timestamp - ctimestamp. This can be handy for recording when a document has been modified or added.
// Object - This datatype is used for embedded documents.
// Null - This type is used to store a Null value.
// Symbol - This datatype is used identically to a string; however, it's generally reserved for languages that use a specific symbol type.
// Date - This datatype is used to store the current date or time in UNIX time format. You can specify your own date time by creating object of Date and passing day, month, year into it.
// Object ID - This datatype is used to store the document’s ID.
// Binary data - This datatype is used to store binary data.
// Code - This datatype is used to store JavaScript code into the document.
// Regular expression - This datatype is used to store regular expression.


// ---------------------------
// insert documents
// ---------------------------
//      db.COLLECTION_NAME.insert(document)     // insert the document
//      db.mycol.save(document)                  // insert the document // replace whole data of document containing _id as specified in save() method

/*

db.mycol.insert([
   {
      title: 'MongoDB Overview', 
      description: 'MongoDB is no sql database',
      by: 'tutorials point',
      url: 'http://www.tutorialspoint.com',
      tags: ['mongodb', 'database', 'NoSQL'],
      likes: 100
   },	
   {
      title: 'NoSQL Database', 
      description: 'NoSQL database doesnt have tables',
      by: 'tutorials point',
      url: 'http://www.tutorialspoint.com',
      tags: ['mongodb', 'database', 'NoSQL'],
      likes: 20, 
      comments: [	
         {
            user:'user1',
            message: 'My first comment',
            dateCreated: new Date(2013,11,10,2,35),
            like: 0 
         }
      ]
   }
])
*/


// ---------------------------
// query document
// ---------------------------
//      db.COLLECTION_NAME.find()
//      db.mycol.find().pretty()

//{
//   "_id": ObjectId(7df78ad8902c),
//   "title": "MongoDB Overview", 
//   "description": "MongoDB is no sql database",
//   "by": "tutorials point",
//   "url": "http://www.tutorialspoint.com",
//   "tags": ["mongodb", "database", "NoSQL"],
//   "likes": "100"
//}
//
//      Operation	        Syntax	                Example	                                                RDBMS Equivalent
//      Equality	        {<key>:<value>}	        db.mycol.find({"by":"tutorials point"}).pretty()	where by = 'tutorials point'
//      Less Than	        {<key>:{$lt:<value>}}	db.mycol.find({"likes":{$lt:50}}).pretty()	        where likes < 50
//      Less Than Equals	{<key>:{$lte:<value>}}	db.mycol.find({"likes":{$lte:50}}).pretty()	        where likes <= 50
//      Greater Than	        {<key>:{$gt:<value>}}	db.mycol.find({"likes":{$gt:50}}).pretty()	        where likes > 50
//      Greater Than Equals	{<key>:{$gte:<value>}}	db.mycol.find({"likes":{$gte:50}}).pretty()	        where likes >= 50
//      Not Equals	        {<key>:{$ne:<value>}}	db.mycol.find({"likes":{$ne:50}}).pretty()	        where likes != 50


// ---------------------------
// ---------------------------
/*
db.mycol.insert([
   {
      title: 'MongoDB Overview', 
      description: 'MongoDB is no sql database',
      by: 'tutorials point',
      url: 'http://www.tutorialspoint.com',
      tags: ['mongodb', 'database', 'NoSQL'],
      likes: 100
   },	
   {
      title: 'NoSQL Database', 
      description: 'NoSQL database doesnt have tables',
      by: 'tutorials point',
      url: 'http://www.tutorialspoint.com',
      tags: ['mongodb', 'database', 'NoSQL'],
      likes: 20, 
      comments: [	
         {
            user:'user1',
            message: 'My first comment',
            dateCreated: new Date(2013,11,10,2,35),
            like: 0 
         }
      ]
   }
])*/


// db.mycol.find({"title" : "MongoDB Overview"})
// db.mycol.find({"title" : "MongoDB Overview"}).pretty()
// db.mycol.find({"likes":{$gte:20}}).pretty()
// db.mycol.find({"likes":{$gt:20}}).pretty()

//db.mycol.find({"by": "tutorials point"}).pretty()



// ---------------------------
// AND 
// ---------------------------
/*
db.mycol.find(
   {
      $and: [
         {key1: value1}, {key2:value2}
      ]
   }
).pretty()
*/

/*
db.mycol.find(
   {
      $and: [
        {"by": "tutorials point"},
        {title: 'MongoDB Overview'},
        // {"likes" : 20.0},
        // {"likes": 100}
         // {key1: value1}, {key2:value2}
      ]
   }
).pretty()
*/

// ---------------------------
// OR
// ---------------------------
/*
db.mycol.find(
   {
      $or: [
         {key1: value1}, {key2:value2}
      ]
   }
).pretty()
*/
/*
db.mycol.find(
   {
      $or: [
        {"likes" : 20.0},
        {"likes": 100}
      ]
   }
).pretty()
*/   
// ---------------------------

// ---------------------------
//      AND and OR Together
// ---------------------------
// db.mycol.find({
//     "likes": {$gt:10},
//     $or: [
//             //      {"likes" : 20.0},
//             //      {"likes": 100}
//             {"by": "tutorials point"},
//             {"title": "MongoDB Overview"}
//         ]
//     }).pretty()
   
// ---------------------------
//    UPDATE
// db.COLLECTION_NAME.update(SELECTION_CRITERIA, UPDATED_DATA)
// ---------------------------
/*
db.mycol.find()    // print all documents of the mycol collection
db.mycol.update({'_id':ObjectId("598aea8feb8b4de45c012fc8")},{$set:{'title':'New MongoDB Tutorial'}})
db.mycol.update(
    {'title':'MongoDB Overview'},
    {$set:{'title':'New MongoDB Tutorial'}},
    {multi:true}        // to update multiple documents, set a parameter 'multi' to true
    )
*/
// ---------------------------
 // SAVE
//    save() method REPLACES the existing document with the new document 
//
//      db.COLLECTION_NAME.save({_id:ObjectId(),NEW_DATA})
//
// ---------------------------
/*
db.mycol.save(
   {
      "_id" : ObjectId("598aea8feb8b4de45c012fc8"),
       "title":"11 Tutorials Point New Topic",
         "by":"Tutorials Point"
   }
)   
db.mycol.find()
*/

/*
// ---------------------------
// remove
//      remove a document from the collection
//
//      db.COLLECTION_NAME.remove(DELLETION_CRITTERIA, justOne)
//
// use mydb1
db.mycol.find();
db.mycol.remove(ObjectId("598aea8feb8b4de45c012fc8"))
db.mycol.remove({'title':'NoSQL Database'})
db.mycol.remove({'title':'New MongoDB Tutorial 2'}, 1) // delete only the first record
db.mycol.find();
// db.mycol.remove({});    // Remove All Documents from a Collection // https://docs.mongodb.com/manual/reference/method/db.collection.remove/
*/

// ---------------------------
// ---------------------------
// PROJECTION - (display fewer columns?) -- [[ see also $project ]]
//
//      db.collection.find(query, projection)
//      db.COLLECTION_NAME.find({},{KEY:1})     // projection gives only those list of fields with value 1
//
// ---------------------------
// db.mycol.find();
// db.mycol.find({});
// db.mycol.find({},{"title":1})           // _id field is displayed, even without selecting it with 1
// db.mycol.find({},{_id:0, "title":1})    // _id field is now not displayed
// ---------------------------

/*
// Limit Records
//      db.COLLECTION_NAME.find().limit(NUMBER)
// ---------------------------
// db.mycol.remove({}); // remove all
// db.mycol.insert({"title":"tutorials point 1"})
// db.mycol.insert({"title":"tutorials point 2"})
// db.mycol.insert({"title":"tutorials point 3"})
db.mycol.find() // print all
db.mycol.find({},{"title":1,_id:0}).limit(2)            // limit to 1st 2 documents
db.mycol.find({},{"title":1,_id:0}).limit(2).skip(0)    // limit to 2, dont skip any - same as above - default value in skip() method is 0
db.mycol.find({},{"title":1,_id:0}).limit(1).skip(1)    // limit to 1, after skipping 1 - that is, print from 2nd document
*/
/*
// ---------------------------
// ---------------------------
//      SORT DOCUMENTS
//
//              db.COLLECTION_NAME.find().sort({KEY:1})
//
//      accepts a document containing
//              a list of fields
//              along with their sorting order.
//                       1 is used for ascending order
//                      -1 is used for descending order
// ---------------------------
db.mycol.find();
db.mycol.find({},{"title":1,_id:0}).sort({"title":1})
db.mycol.find({},{"title":1,_id:0}).sort({"title":-1})
*/
// ---------------------------
// ---------------------------
/*
INDEX
    Indexes support the efficient resolution of queries
    Indexes are special data structures, that store a small portion of the data set in an easy-to-traverse form. The index stores the value of a specific field or set of fields, ordered by the value of the field as specified in the index.

    create an index
        db.COLLECTION_NAME.ensureIndex({KEY:1})
            name of the field on which you want to create index
             1 is for ascending order
            -1 is for descending order

*/
// db.mycol.stats();
// ..
//    "nindexes" : 1,
//    "totalIndexSize" : 36864,
//    "indexSizes" : {
//        "_id_" : 36864
//    },
// ..
//
// db.mycol.ensureIndex({"title":1}) // create index on 'title' field in ascending order
// {
//     "createdCollectionAutomatically" : false,
//     "numIndexesBefore" : 1,
//     "numIndexesAfter" : 2,
//     "ok" : 1.0
// }
//
// db.mycol.stats();
// ..
//    "nindexes" : 2,
//    "totalIndexSize" : 53248,
//    "indexSizes" : {
//        "_id_" : 36864,
//        "title_1" : 16384                                     // ---- this is the index created with name of column ('title') and sort order (1)
//    },
// ..
//
// db.mycol.ensureIndex({"title":1,"description":-1})
// {
//     "createdCollectionAutomatically" : false,
//     "numIndexesBefore" : 2,
//     "numIndexesAfter" : 3,
//     "ok" : 1.0
// }
//
// db.mycol.stats();
// ..
//    "nindexes" : 3,
//    "totalIndexSize" : 69632,
//    "indexSizes" : {
//        "_id_" : 36864,
//        "title_1" : 16384,
//        "title_1_description_-1" : 16384                      // ---- this is the index created with {{ name of column and sort order }} combinations
//   },
// ..
// ---------------------------
/*
ensureIndex() method also accepts list of options (which are optional). Following is the list -
Parameter	        Type	        Description
background	        Boolean	        Builds the index in the background so that building an index does not block other database activities. Specify true to build in the background. The default value is false.
unique	                Boolean	        Creates a unique index so that the collection will not accept insertion of documents where the index key or keys match an existing value in the index. Specify true to create a unique index. The default value is false.
name	                string	        The name of the index. If unspecified, MongoDB generates an index name by concatenating the names of the indexed fields and the sort order.
dropDups	        Boolean	        Creates a unique index on a field that may have duplicates. MongoDB indexes only the first occurrence of a key and removes all documents from the collection that contain subsequent occurrences of that key. Specify true to create unique index. The default value is false.
sparse	                Boolean	        If true, the index only references documents with the specified field. These indexes use less space but behave differently in some situations (particularly sorts). The default value is false.
expireAfterSeconds	integer	        Specifies a value, in seconds, as a TTL to control how long MongoDB retains documents in this collection.
v	                index version	The index version number. The default index version depends on the version of MongoDB running when creating the index.
weights	                document	The weight is a number ranging from 1 to 99,999 and denotes the significance of the field relative to the other indexed fields in terms of the score.
default_language	string	        For a text index, the language that determines the list of stop words and the rules for the stemmer and tokenizer. The default value is english.
language_override	string	        For a text index, specify the name of the field in the document that contains, the language to override the default language. The default value is language.
*/
// ---------------------------
/*
aggregate() Method

            db.COLLECTION_NAME.aggregate(AGGREGATE_OPERATION)

    Aggregation
        process data records and return computed results
        group values from multiple documents together
            can perform a variety of operations on the grouped data
            to return a single result.
        In SQL count(*) and with group by
            is an equivalent of mongodb aggregation.
*/
// ---------------------------
/*
// remove all
db.mycol.remove({});
 // insert below data
db.mycol.insert([
{
   // _id: ObjectId(7df78ad8902c)
   title: 'MongoDB Overview', 
   description: 'MongoDB is no sql database',
   by_user: 'tutorials point',
   url: 'http://www.tutorialspoint.com',
   tags: ['mongodb', 'database', 'NoSQL'],
   likes: 100
},
{
   // _id: ObjectId(7df78ad8902d)
   title: 'NoSQL Overview', 
   description: 'No sql database is very fast',
   by_user: 'tutorials point',
   url: 'http://www.tutorialspoint.com',
   tags: ['mongodb', 'database', 'NoSQL'],
   likes: 10
},
{
   // _id: ObjectId(7df78ad8902e)
   title: 'Neo4j Overview', 
   description: 'Neo4j is no sql database',
   by_user: 'Neo4j',
   url: 'http://www.neo4j.com',
   tags: ['neo4j', 'database', 'NoSQL'],
   likes: 750
}]);
*/

/*
// display all
db.mycol.find();
// display aggregate, 
db.mycol.aggregate([
    {
        $group : {                          // group by
            _id : "$by_user",               // group by 'by_user'       => per user
            num_of_books_1: {
                $sum : 1                    //      number of books ($sum), per user,   here, 1 means +ve sum
            }
        }
    }
])
*/

//
// ---------------------------
// list of available aggregation expressions.
// ----
// Expression	Description	                                                                                Example
// $sum	        Sums up the defined value from all documents in the collection.	                                db.mycol.aggregate([{$group : {_id : "$by_user", num_tutorial : {$sum : "$likes"}}}])
// $avg	        Calculates the average of all given values from all documents in the collection.	        db.mycol.aggregate([{$group : {_id : "$by_user", num_tutorial : {$avg : "$likes"}}}])
// $min	        Gets the minimum of the corresponding values from all documents in the collection.	        db.mycol.aggregate([{$group : {_id : "$by_user", num_tutorial : {$min : "$likes"}}}])
// $max	        Gets the maximum of the corresponding values from all documents in the collection.	        db.mycol.aggregate([{$group : {_id : "$by_user", num_tutorial : {$max : "$likes"}}}])
// $push	Inserts the value to an array in the resulting document.	                                db.mycol.aggregate([{$group : {_id : "$by_user", url : {$push: "$url"}}}])
// $addToSet	Inserts the value to an array in the resulting document but does not create duplicates.	        db.mycol.aggregate([{$group : {_id : "$by_user", url : {$addToSet : "$url"}}}])
// $first	Gets the first document from the source documents according to the grouping. Typically this makes only sense together with some previously applied Ӥsortԭstage.
//                                                                                                              db.mycol.aggregate([{$group : {_id : "$by_user", first_url : {$first : "$url"}}}])
// $last	Gets the last document from the source documents according to the grouping. Typically this makes only sense together with some previously applied Ӥsortԭstage.
//                                                                                                              db.mycol.aggregate([{$group : {_id : "$by_user", last_url : {$last : "$url"}}}])
// ---------------------------
/*
Pipeline
    In UNIX command, shell pipeline means
        the possibility to execute an operation on some input and
            use the output as the input for the next command and so on.
    MongoDB also supports same concept in aggregation framework.
        There is a set of possible stages and
            each of those take
                a set of documents as an input and
                produces a resulting set of documents (or the final resulting JSON document at the end of the pipeline).
                    These can then in turn be used for the next stage and so on.

Following are the possible stages in aggregation framework -
    $limit      This limits the amount of documents to look at, by the given number starting from the current positions.
    $skip       With this, it is possible to skip forward in the list of documents for a given amount of documents.
    $sort       Sorts the documents.
    $project    Used to select some specific fields from a collection.
    $group      This does the actual aggregation as discussed above.
    $match      This is a filtering operation and thus this can reduce the amount of documents that are given as input to the next stage.
    $unwind     This is used to unwind document that are using arrays. When using an array, the data is kind of pre-joined and this operation will be undone with this to have individual documents again. Thus with this stage we will increase the amount of documents for the next stage.
*/
// ---------------------------
// ---------------------------

// start "MongoDB replica set"
//              mongod --port "PORT" --dbpath "YOUR_DB_DATA_PATH" --replSet "REPLICA_SET_INSTANCE_NAME"
mongod --port 27017  --dbpath "C:\mongodb\replica-set\data" --replSet rs0

// In Mongo client
rs.initiate()   // to initiate a new replica set.
rs.conf()       // To check the replica set configuration, issue the command
rs.status()     // To check the status of replica set issue the command

db.isMaster()   // You can add mongod instance to replica set only when you are connected to primary node

// ADD NODES
//      NOTE: start mongod instances on multiple machines
//              rs.add(HOST_NAME:PORT)
//      rs.add("mongod1.net:27017")
//      rs.add("mongod2.net:27017")

// db

// https://www.tutorialspoint.com/mongodb/mongodb_sharding.htm

// ---------------------------
// ---------------------------
/*
// stop Mongo
//      https://docs.mongodb.com/manual/tutorial/manage-mongodb-processes/

// stop mongo (standalone)
//      use admin
//      db.shutdownServer()

// Stop a Replica Set
//      db.shutdownServer({timeoutSecs : 5})                    // wait for 5 seconds, till secondaries catch up - If no secondaries catch up, it will not shut down
//      db.adminCommand({shutdown : 1, timeoutSecs : 5})        // wait for 5 seconds, till secondaries catch up - If no secondaries catch up, it will not shut down

//      db.adminCommand({shutdown : 1, force : true})           // If there is no up-to-date secondary and you want the primary to shut down
*/

// INTERRUPT
//      interrupts a running operation at the next interrupt point.
// db.currentOp()
// db.killOp(<opId>)
// ---------------------------
// ---------------------------
// ---------------------------
// ---------------------------



</pre>




