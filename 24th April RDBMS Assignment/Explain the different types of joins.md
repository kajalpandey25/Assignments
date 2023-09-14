## Explain the different types of joins?

**Ans**
```
Inner Join: This type of join returns only the rows that have matching values in both tables. It excludes the rows that do not have a matching value in either table. Inner join can be further classified as:

a. Equi-join: It is the most common type of inner join, which uses the equality operator (=) to match the values in the columns between two tables.

b. Non-equi join: In this join, comparison operators other than equality (such as <, >, <=, >=) are used to match the values in the columns between two tables.

Left Join: This type of join returns all the rows from the left table and the matching rows from the right table. If there are no matching rows in the right table, the result will include NULL values.

Right Join: This type of join is the opposite of the left join, returning all the rows from the right table and the matching rows from the left table. If there are no matching rows in the left table, the result will include NULL values.

Full Outer Join: This type of join returns all the rows from both tables and includes NULL values for any rows that do not have a matching row in the other table.

Cross Join: Also known as a Cartesian join, it returns the Cartesian product of the two tables. It returns all possible combinations of rows from both tables.

Self Join: This type of join is used when two copies of the same table need to be joined together based on a related column. It allows you to find relationships between data within the same table.
```