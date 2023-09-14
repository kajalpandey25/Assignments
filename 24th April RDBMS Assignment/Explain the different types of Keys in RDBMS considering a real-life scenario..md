## Explain the different types of Keys in RDBMS considering a real-life scenario.

**Ans**
```
there are 7 types of keys in RDBMS

1.Primary Key: primary key is a column of a table or a set of columns that helps to identify every record present in that table uniquely.

2.Super Key: Super Key is the set of all the keys which help to identify rows in a table uniquely.

3.Candidate Key : Candidate keys are those attributes that uniquely identify rows of a table. The Primary Key of a table is selected from one of the candidate keys

4.Alternate Key : As stated above, a table can have multiple choices for a primary key; however, it can choose only one.

5.Foreign Key : Foreign Key is used to establish relationships between two tables. A foreign key will require each value in a column or set of columns to match the Primary Key of the referential table.

6.Composite Key : A composite Key is a set of two or more attributes that help identify each tuple in a table uniquely. The attributes in the set may not be unique when considered separately. 

7.Unique Key : Unique Key is a column or set of columns that uniquely identify each record in a table. All values will have to be unique in this Key.

**real-life-scenario**

In a real-life scenario, consider a retail store's database. The store has two tables: Customer and Order. The Customer table has columns such as Customer_ID, Customer_Name, and Customer_Address. The Order table has columns such as Order_ID, Order_Date, Customer_ID, and Order_Amount.

In this scenario, the Customer_ID could be the primary key of the Customer table. The Customer_ID could also be a foreign key in the Order table, referencing the primary key of the Customer table. This relationship ensures that each order is associated with a unique customer.
```