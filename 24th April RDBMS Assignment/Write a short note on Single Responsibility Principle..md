## Write a short note on Single Responsibility Principle.

**Ans**
```
Single Responsibility Principle (SRP) is a software design principle that states that a class or module should have only one reason to change. This principle is one of the SOLID principles of Object-Oriented Programming (OOP) and is widely used in software development.

In simple terms, the SRP suggests that a class or module should have a single responsibility or function, and it should not be responsible for more than one aspect of the software system. By adhering to this principle, a software system can be more modular, maintainable, and easier to understand.

When a class or module has only one responsibility, it becomes easier to test and modify. Changes made to one responsibility of the class do not affect the other responsibilities, which makes it easier to maintain and debug. Also, if there is a need to add new functionality, it can be added without affecting the existing code.

For example, consider a class that reads data from a file and performs some processing on it. If this class is responsible for both reading data from a file and writing it to a database, then it violates the SRP. Instead, these responsibilities should be separated into two different classes, one for reading data from the file, and another for writing it to the database.

In conclusion, adhering to the Single Responsibility Principle results in code that is easier to maintain, test, and modify. By separating responsibilities, software developers can create more modular and maintainable code, resulting in more robust software systems.
```