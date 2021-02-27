# MERN_FullStack

#---------------------------------------------------------------------#
##MongoDB - NoSQL Document Oriented Database

- A **"document-oriented"** database or a NoSQL document store is a modern way to store data in JSON format rather than simple rows and columns. It allows you to express data in its natural form the way it's meant to be.

- NoSQL databases keep data in documents.

- These documents follow a **minimum** of standard **format rules**. The format used could be **JSON**, XML, YAML etc.

- MongoDB is a **schema-less NoSQL document database**. It means you can store JSON documents in it, and the structure of these documents can vary as it is not enforced like SQL databases.

- ###JSON in NoSQL: A Flexible, Fluid & Rich Data Model

  The JSON format has three basic foundations:

* **Key value pairs or attributes:** Every value in JSON is stored in a key value pair. These pairs are sometimes referred to as attributes. The keys are simple strings and the values could be of any type e.g. int, float, double, boolean etc.
* **Embedding JSON objects:** Other than primitive types, values in a key value pair can also be other JSON objects allowing you to create a hierarchy of JSON Objects. Placing JSON objects inside another JSON object is called an "embedded data model" in document databases.
* **Arrays:** Arrays are a natural programming idiom in all programming languages and data structures, so why not store data the way it is expressed? The JSON format also supports storing arrays as values against a key.

### NOTE: We are using here **MongoDB Atlas** - Cloud based DB (not local instance -MongoDB). Plus we are going it deploy it on Heroku (Platform as a Service), hence can't setup Database on it. We can do it if we use IAAS like on AWS, DigitalOcean, etc

### Terminologies

**Collections**
‘Collections’ in Mongo are equivalent to tables in relational databases. They can hold multiple JSON documents.

**Documents**
‘Documents’ are equivalent to records or rows of data in SQL. While a SQL row can reference data in other tables, Mongo documents usually combine that in a document.

**Fields**
‘Fields’ or attributes are similar to columns in a SQL table.

**Schema**
While Mongo is schema-less, SQL defines a schema via the table definition. A Mongoose ‘schema’ is a document data structure (or shape of the document) that is enforced via the application layer.

**Models**
‘Models’ are higher-order constructors that take a schema and create an instance of a document equivalent to records in a relational database.
#---------------------------------------------------------------------#

## Mongoose :

- Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js.
- It manages relationships between data, provides schema validation, and is used to translate between objects in code and the representation of those objects in MongoDB.
- It helps to model our DB and provides basic functions to work on our DB.

## Steps:

1. intialize package.json in your [project-dir] - npm init
   (entry point: (nodeapp1.js) **server.js** ) > Add any
2. install the dependencies
   < npm i express express-validator bcryptjs config gravatar jsonwebtoken mongoose request

   < npm i -D nodemon concurrently

3. Create **server.js** file
4.
