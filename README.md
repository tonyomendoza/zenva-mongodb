# zenva-mongodb

## Windows Installation

[Community Server](https://www.mongodb.com/try/download/community)

[Database Tools](https://www.mongodb.com/try/download/database-tools).

[Shell](https://www.mongodb.com/try/download/shell)


## Commands

Some basic Mongo CLI commands are:
To turn on the Mongo Server
```
mongod
```

:warning: There are some issues that may occur on Windows Installation that I can try to post here at a later day. Essentially, make sure to set the PATHs appropriately and to have a readable/writeable directory for your data. Additionally, you will need to install the Mongo Database Tools as well.

To use mongo 
```
mongo <optional params>
```

Importing Data
```
mongoimport --db <dbName> --collection <collectionName> --file <filePath>
```

Exporting Data
```
mongoexport --db <dbName> --collection <collectionName> --out <filePath>
```

Data Dump
```
mongodump -d <dbName>
```

Once you are using mongo, then you can run some of the following commands
```
show dbs
```
```
use <dbName>
```
```
show collections
```
### Querying Data
Find
```
db.<collectionName>.find()
db.<collectionName>.find({})
```

Find with parameters
```
db.<collectionName>.find({key: value, ...})
```
Samples of find with parameters such as
- Text
```
db.countries.find({continent:"Europe"})
```
- Number
```
db.cities.find({population:5.8})
```
- Number Compare
```
db.cities.find({population:{$gt:4}})
```
- Number Compare, multiple parameters
```
db.cities.find({population:{$gt:4, $lt:9}})
```

Find One
```
db.<collectionName>.findOne({key: value, ...})
```