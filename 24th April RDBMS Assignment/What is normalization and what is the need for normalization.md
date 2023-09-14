## What is normalization and what is the need for normalization?

**Ans**
```
Normalization is a process of organizing data in a database to reduce redundancy and improve data integrity. It involves dividing a database into two or more tables and establishing relationships between them. 

There are several levels of normalization, called Normal Forms (NF). The most commonly used normal forms are:

First Normal Form (1NF): 
    A table is in 1NF if it has no repeating groups or arrays. Each column in a table must have atomic values, meaning it cannot be broken down into smaller components.

Second Normal Form (2NF): 
    A table is in 2NF if it is in 1NF and all non-key attributes are dependent on the primary key.

Third Normal Form (3NF): 
    A table is in 3NF if it is in 2NF and all non-key attributes are independent of each other.

**The need for normalization arises from the fact that redundant data can lead to various issues, such as**:

Data Inconsistencies: 
    When data is stored in multiple places, it can become inconsistent if updates are made to one location but not others. This can result in incorrect data being used in the database.

Data Duplication: 
    Redundant data takes up more storage space than necessary, which can lead to performance issues as the database grows.

Update Anomalies: 
    If data is stored in multiple locations, it can be challenging to keep all instances of the data consistent. This can result in update anomalies, where updates made to one location do not get propagated to other locations.

Insertion and Deletion Anomalies: 
    Redundant data can result in insertion and deletion anomalies, where it is difficult to add new data or delete existing data without violating a constraint.
```