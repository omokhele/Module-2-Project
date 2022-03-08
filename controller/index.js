const res = require('express/lib/response');
const Country = require('../models/country');

async function createCountry(req, res){
try {
    const country = await new Country(req.body)
    await country.save()

    return res.status(201).json({
        country,
    })

}catch(error){
    return res.status(500).json({error: error.message})
}
}


async function getCountries(req, res){
    try {
        const countries = await Country.find()
        return res.status(200).json({countries})
    } catch(error) {
            return res.status(500).send(error.message)
    }
}

async function getCountrybyId(req, res){
    try {
       const {id} = req.params;
       const country = await Country.findById(id)
       if (country) {
           return res.status(200).json({country})
       }
       return res.status(404).send('Country with the specified ID does not exist');
    
    }catch(error){
        return res.status(500).send(error.message)
    }
    }

    
    const updateCountry =  (req, res) => {
        try {
          const { id } = req.params
         Country.findByIdAndUpdate(id, req.body, { new: true }, (err, country) => {
           
            if (err !== null) {
              console.log(err, 'error')
              res.status(404).send(err.message)
            } else {
              console.log(country)
              res.json(country)
            }
          })
        } catch (error) {
         return  res.status(500).send(error.message)
        }
      }

                                        
        async function deleteCountry(req, res){
            try {
               const {id} = req.params;
               const deleted = await Country.findByIdAndDelete(id)
                   if(deleted) {
                       res.status(200).send("Country deleted");
                   }
                   throw new Error('Country not found!');
                  
            }catch(error){
                return res.status(500).send(error.message);
            }
            }


module.exports = {
    createCountry, 
    getCountries,
    getCountrybyId,
    updateCountry,
    deleteCountry
}