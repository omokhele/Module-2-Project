# Module-2-Project: Countries Database

![Flag Logo](https://upload.wikimedia.org/wikipedia/commons/3/3d/Flag-map_of_the_world_%282017%29.png)

My Module 2 project is a countries database api that gives an overview of countries across the habitable continents of the world. Included in my database a country as a representation of each habitable continent.
___

## Installation Instructions

### *How to Install and run file locally*

First create the database repository. Then npm install all dependencies. In this case, 

```terminal
npm install mongoose 
npm install nodemon 
npm install morgan
npm install express 
```
These dependencies are installed in the directory as they will be required in the database. The following repositories are then created in the database repository 
1.  db repository 
2.  models repository 
3.  seed repository 
4.  controller repository 
5.  routes repository 

The database repository also contains a server.js file.

In each of these repositories, .js file were created to handle different functions.

* The db/index.js file requires mongoose and ensures database is succesfully connected to mongoose.
* The models repository holds four Schemas: `cities` `capital` `country` and `continent` Schemas. Three of the four schemas reference each other in the database.
* The seed/countries.js file holds our database information. 
  * populate the database in terminal by running node seed/countries.js and enter.
  * Type the mongo keyword and enter the use keyword followed by countriesDatabase to populate the database.
* The controller/index.js file contains each CRUD action and handles the Middleware functions.
* The routes/index.js file shows each route/path for different CRUD actions to be displayed on the browser. For example, `http://localhost:3000/api/countries/`. This displays     each CRUD action as requested.
* The server.js file requires express and ensures that the database populates on localhost:3000. It shows that the routes are properly connected.

---

## Endpoints, Parameters, Schemas
- The endpoints used in the database api are POST, PUT, DELETE and GET. 
```javascript
  router.post('/countries', controller.createCountry) // creates a new country object.
  router.get('/countries', controller.getCountries) // reads all countries in the database
  router.get('/countries/:id', controller.getCountrybyId) // finds a country by it's unique ID
  router.put('/countries/:id', controller.updateCountry) // updates a country information
  router.delete('/countries/:id', controller.deleteCountry) // deletes a country by its unique ID
  ```
  The Postman app was used in testing the database to ensure that the database responded as expected.
- Different parameters were defined using multiple data types.
- Four Schema .js files were used in this database. Three out of four files referenced each other.

country schema
>`const Country = new Schema(
    {
        name: {type: String, required: true},
        continent: {type: String, ref:'continents'},
        president: {type: String, ref:'presidents'},
        flag: {type: String, required: true},
        population: {type: Number, ref: 'populations'},
        capital: {type: String, ref: 'capitals'},
        created: {type: Date, required: true},
        gdp: {type: String, required: true},
        private: {type: Boolean, required: false}
    },
    {timestamps: true},
)`

country array
>`{
name: 'Nigeria', 
continent: continent1.name, 
president: 'Muhammadu Buhari', 
flag: 'https://www.infoplease.com/sites/infoplease.com/files/public%3A/nigeria.gif', 
population: 177155754, 
capital: capital3.countryCapital, 
gdp: '$478.5 billion', 
created: 10-1-1960
},`

output
>`{
      "_id": "6228d8a7c2f280e548d51dbc",
      "name": "China",
      "continent": "Asia",
      "president": "Xi Jinping",
      "flag": "https://www.infoplease.com/sites/infoplease.com/files/public%3A/china.gif",
      "population": 1384688986,
      "capital": "Beijing",
      "created": "1969-12-31T23:59:58.060Z",
      "gdp": "14.72 trillion",
      "__v": 0,
      "createdAt": "2022-03-09T16:41:11.942Z",
      "updatedAt": "2022-03-09T16:41:11.942Z"
    },`
    
---

## Hosting the Database
The database was connected to MongoDB Atlas and hosted unto the heroku platform. A .env and .gitignore file was also created.

Here is [countries database api](https://arcane-springs-77163.herokuapp.com/countries "Countries Database") hosted on the Heroku platform.

### **Technologies**

The API was created using Express, MongoDB, Node.JS and Mongoose.

*Thank you.*
