const db = require('../db')
const Continent = require('../models/continent')
const Country = require('../models/country')
const Capital = require('../models/capital')
const City = require('../models/city')


db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const continent1 = await new Continent ({name: 'Africa', location: 'Eastern Hemisphere'})
    continent1.save()

    const continent2 = await new Continent ({name: 'Asia', location: 'Northern Hemisphere'})
    continent2.save()

    const continent3 = await new Continent ({name: 'Europe', location: 'Eastern Hemisphere'})
    continent3.save()

    const continent4 = await new Continent ({name: 'North America', location: 'Western Hemisphere'})
    continent4.save()

    const continent5 = await new Continent ({name: 'Oceania', location: 'Southern Hemisphere'})
    continent5.save()



    const city1 = await new City ({largestCity: 'Sydney', cCapital: 'Canberra'})
    city1.save()

    const city2 = await new City ({largestCity: 'Shanghai', cCapital: 'Beijing'})
    city2.save()

    const city3 = await new City ({largestCity: 'Lagos', cCapital: 'Abuja'})
    city3.save()

    const city4 = await new City ({largestCity: 'London', cCapital: 'London'})
    city4.save()

    const city5 = await new City ({largestCity: 'New York City', cCapital: 'Washington DC'})
    city5.save()

  

    const capital1 = await new Capital ({countryCapital: city1.cCapital})
    capital1.save()

    const capital2 = await new Capital ({countryCapital: city2.cCapital})
    capital2.save()

    const capital3 = await new Capital ({countryCapital: city3.cCapital})
    capital3.save()

    const capital4 = await new Capital ({countryCapital: city4.cCapital})
    capital4.save()

    const capital5 = await new Capital ({countryCapital: city5.cCapital})
    capital5.save()


    const countries = [
        {name: 'Australia', continent: continent5.name, president: 'Scott Morrison', flag: 'https://www.infoplease.com/sites/infoplease.com/files/public%3A/australi.gif', population: 22507617, capital: capital1.countryCapital, gdp: '998.3 billion', created: 1-1-1901},

        {name: 'China', continent: continent2.name, president: 'Xi Jinping', flag: 'https://www.infoplease.com/sites/infoplease.com/files/public%3A/china.gif', population: 1384688986, capital: capital2.countryCapital, gdp: '14.72 trillion', created: 10-1-1949},

        {name: 'Nigeria', continent: continent1.name, president: 'Muhammadu Buhari', flag: 'https://www.infoplease.com/sites/infoplease.com/files/public%3A/nigeria.gif', population: 177155754, capital: capital3.countryCapital, gdp: '$478.5 billion', created: 10-1-1960},

        {name: 'United Kingdom', continent: continent3.name, president: 'Boris Johnson', flag: 'https://www.infoplease.com/sites/infoplease.com/files/public%3A/uk.gif', population:  63742977, capital: capital4.countryCapital, gdp: '$2.387 trillion', created:  5-1-1707},
        
        {name: 'USA', continent: continent4.name, president: 'Joe Biden', flag: 'https://www.infoplease.com/sites/infoplease.com/files/public%3A/usa.gif', population: 318892103, capital: capital5.countryCapital5, gdp: '$16.72 trillion', created: 7-4-1776}   
    ]  


    await Country.insertMany(countries)
    console.log("Countries database created!")
}

    const run = async() => {
        await main()
        db.close
    }

    run()




    