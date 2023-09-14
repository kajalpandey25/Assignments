## List out the different levels of Normalization and explain them in detail.

**Ans**
```
Normalization is a process of organizing data in a database to reduce redundancy and improve data integrity. There are different levels of normalization, called Normal Forms (NF), that describe the degree to which data is normalized. 

First Normal Form (1NF)
A table is in 1NF if it has no repeating groups or arrays. Each column in a table must have atomic values, meaning it cannot be broken down into smaller components. In other words, each column should contain only one piece of information. For example, a table containing customer details should have separate columns for the first name, last name, address, city, and state.

Second Normal Form (2NF)
A table is in 2NF if it is in 1NF and all non-key attributes are dependent on the primary key. This means that every column in the table must be related to the primary key, and any non-key columns should not be dependent on each other. For example, a table containing sales orders with columns for order number, customer ID, product ID, quantity, and price is in 2NF. The order number and customer ID form the composite primary key, and the product ID, quantity, and price are dependent on the primary key.

Third Normal Form (3NF)
A table is in 3NF if it is in 2NF and all non-key attributes are independent of each other. This means that if a column is not part of the primary key, it should not be dependent on any other non-key columns. For example, a table containing sales orders with columns for order number, customer ID, product ID, product name, and price is not in 3NF because the product name is dependent on the product ID. To normalize this table to 3NF, we would split it into two tables - one for sales orders and another for products - with a foreign key relationship between them.

Boyce-Codd Normal Form (BCNF)
A table is in BCNF if it is in 3NF and every determinant is a candidate key. A determinant is any column or group of columns that uniquely determines another column in the table. For example, a table containing employee details with columns for employee ID, department ID, and salary is not in BCNF because the department ID determines the salary. To normalize this table to BCNF, we would split it into two tables - one for employee details and another for department details - with a foreign key relationship between them.

Fourth Normal Form (4NF)
A table is in 4NF if it is in BCNF and has no multi-valued dependencies. A multi-valued dependency exists when a column in a table depends on more than one column that forms a composite key. For example, a table containing orders with columns for order number, product ID, product name, and product attributes is not in 4NF because the product attributes are dependent on the product ID and product name. To normalize this table to 4NF, we would split it into three tables - one for orders, one for products, and one for product attributes - with foreign key relationships between them.
```