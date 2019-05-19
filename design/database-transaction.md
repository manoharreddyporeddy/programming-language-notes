# For
#   database
#   transaction

# ACID (a set of properties of   database transactions,   intended to guarantee validity even in the event of errors, power failures, etc)
Atomicity	- each transaction be "all or nothing"
Consistency	- any transaction will bring the database from one valid state to another
Isolation	- concurrent execution of transactions results in a system state that would be obtained if transactions were executed sequentially, i.e., one after the other
Durability	- once a transaction has been committed, it will remain so, even in the event of power loss, crashes, or errors
