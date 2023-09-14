## What are joins and why do we need them?

**Ans**
```
Joins are used in relational databases to combine data from two or more tables based on a related column between them. The primary purpose of joins is to enable users to retrieve information that is spread across multiple tables in a database. 

Inner Join: 
    This type of join returns only the rows that have matching values in both tables. It excludes the rows that do not have a matching value in either table.

Left Join: 
    This type of join returns all the rows from the left table and the matching rows from the right table. If there are no matching rows in the right table, the result will include NULL values.

Right Join: 
    This type of join is the opposite of the left join, returning all the rows from the right table and the matching rows from the left table. If there are no matching rows in the left table, the result will include NULL values.

Full Outer Join: 
    This type of join returns all the rows from both tables and includes NULL values for any rows that do not have a matching row in the other table.

Joins are essential for working with relational databases because they allow users to access data from multiple tables at once. 
```