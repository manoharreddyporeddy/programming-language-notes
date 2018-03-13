Sources

https://dev.mysql.com/doc/refman/5.7/en/user-variables.html
https://dev.mysql.com/doc/refman/5.7/en/user-variables.html
https://dev.mysql.com/doc/refman/5.7/en/union.html
https://dev.mysql.com/doc/refman/5.7/en/temporary-table-problems.html
https://dev.mysql.com/doc/refman/5.7/en/set-variable.html
https://dev.mysql.com/doc/refman/5.7/en/select.html
https://dev.mysql.com/doc/refman/5.7/en/loop.html
https://dev.mysql.com/doc/refman/5.7/en/create-table.html
https://dev.mysql.com/doc/refman/5.7/en/call.html
https://dev.mysql.com/doc/refman/5.7/en/
https://dev.mysql.com/doc/refman/5.6/en/flow-control-statements.html
https://dev.mysql.com/doc/connector-net/en/connector-net-tutorials-stored-procedures.html




SELECT
      *
FROM
      TABLE1
WHERE
          FIELD1='VALUE1'
      AND FIELD2=123
      AND FIELD3>'VALUE3'

SELECT
     FIELD1
     , LENGTH (FIELD1)
FROM
      TABLE1

SELECT
      COUNT (1)
FROM
      TABLE1

SELECT
      COUNT (FIELD1)
FROM
      TABLE1

SELECT
      DISTINCT
            FIELD1
FROM
      TABLE1

SELECT
      COUNT (DISTINCT FIELD1)
FROM
      TABLE1


SELECT
      FIELD1
FROM
      TABLE1
ORDER BY
     FIELD1 ASC


SELECT
      FIELD1
FROM
      TABLE1
ORDER BY
     FIELD1 DESC


SELECT
      FIELD1
      , FIELD2
FROM
      TABLE1
ORDER BY
     FIELD1 ASC
     , FIELD2 DESC


SELECT
      FIELD1
FROM
      TABLE1
ORDER BY
     FIELD1 ASC
LIMIT 1
