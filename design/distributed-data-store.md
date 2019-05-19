# distributed data store

# CAP theorem
    For a distributed data store
        Partition tolerance	- The system continues to operate despite an arbitrary number of messages being dropped (or delayed) by the network between nodes
        Consistency			- Every read receives the most recent write or an error
        Availability		- Every request receives a (non-error) response – without guarantee that it contains the most recent write	

    P can have either A or C.
        In other words,
            when network partition exists & failure happens,
                then we can have either one of Availability or Consistency)

    Presence of a
        network partition,
            one has to choose between
                consistency and
                availability
