cypher
    open standard for querying
    http://www.opencypher.org/

Cypher for
    declarative query langauge
    for working with graph and graph data
        creating data & // writing
        querying data    // reading

    and how to represent bi-directional relationships.

specify the data that we are interested in
    but not how to fetch
focus on domain
    not database

https://www.youtube.com/watch?v=NH6WoJHN4UA
    property graph model used by Neo4j

        nodes            aan, dan                (nouns)
            properties    name, born, twitter        (adjectives)
            labels        :Person, :Car, :Vehicle
                alias    (p:Person)
        relationships    loves, lives with, owns, drives        (verbs)
            properties    since                        (adverbs)

Graph pattern matching
    (node)-[:RELATIONSHIP]->(node)
    (node {key:value})-[:RELATIONSHIP*..2]->(node)
        upto 2 relationalships depth


CREATE (:Person {name: "Ann"})        -[:LOVES]->        Create (:Person {name: "Dan"})

// Aan initiated, fbfriend relationship with dan
MATCH (:Person {name: "Ann"})        -[:FB_FRIENDS]->    Create (:Person {name: "Dan"})

// All aan fbfriend relationships
MATCH (:Person {name: "Ann"})        -[:FB_FRIENDS]-        Create (p:Person)


// returns graph (graph data/ visualization)
MATCH
    (a:Address)    <-[:REGISTERED_ADDRESS]->    (o:Officer) -->(e:Entity)
WHERE
    a.address CONTAINS "New York"
RETURN *


// returns aggregation data (tabular data)
MATCH
    (a:Address)    <-[:REGISTERED_ADDRESS]->    (o:Officer) -->(e:Entity)
WHERE
    a.address CONTAINS "New York"
RETURN
    e.jurisdiction_description as j,   COUNT(*) as c
ORDER BY
    c DESC
LIMIT
    10



MATCH
    (p:Person)    -[:WENT_TO]->    (u:Uni),
    (p)            -[:LIVES_IN]->    (c:Country),
    (u)            -[:LED_BY]->    (l:Leader),
    (u)            -[:LOCATED_IN]-> (s:State),
WHERE
    s.abbr = 'CT'
RETURN
    p.name,
    c.country, c.leader, p.hair,
    u.name, l.name, s.abbr


relational -> graph database
    step1
        create model/ schema
            nodes
                properties
                labels
            relationship
                properties
    step2
        loading data
            CSV file
    querying
        builtin web app
		Neo4j browser
			query workbench
			visualization tool

Neo4j is
    ACID compliant transactional database

new haskell


Neo4j query
    write code
        query
            Neo4j's servers
        using
            Neo4j's apis
            using language dirvers
                in JS, java, ruby, .net, python, php, etc.
Neo4j
    uses
        BOLT
            efficent binary protocol (compress, encrypted, has type system)
    to speak cyper
        to database 

Neo4j query - faster way
    write
        native server-side extensions
            for Neo4j
            in Java
    instead of
        cypher query optimizer
    to
        hard-code
        how to traverse the graph
            for your queries
        minimize few extra milliseconds

where to store?
    a lot of joins (relationaldb becomes less performant)
        move to graphdb
    tabular data 
        move to relational db
    key value data 
        move to kv db

    multiple databases
        best database
            based on type of data stored

relationaldb query
    increase performance
        index
            prevents full table scans
            create index on every PK
            query
                each join => access different indexes
                slower, as your data size increases
    increase performance further
        de-normalize data
            inconsistency increases
            write time performance

    a lot of joins
        hard to create queries and model relationalships
        performance degardes as data size increases
        long & complex queries
        maintenance difficult

polyglot persistence
    multiple db in architecture
        all in graphdb
        some in graphdb & relationaldb
        all in both

graph database cluster
    Neo4j Neo4j Neo4j

relational db
    ER diagram
        multiple tables
        relationships FKs

convert relational_model to graph_model
    FK -> relationships
    jointables(mainly PK from different tables)        -> relationship (if only FKs), or, relationship with properties (if only FKs)

relationalships
    is_in
    includes
    supplies
    sold

graph_model
    easier to model
    store relationalships
    relationalships traversal performance REMAINS CONSTANT with increase in data size (due to pointer arithmetic in memory or disk)
    queries are shorter & readable
    adding addition properties and relationalships on fly - no schema changes

index free adjacency
    traverse
        to any connected node
        in constant time
        without having index lookup operation
