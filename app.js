const geocode = require('./utils/geocode')
const forecast  = require('.//utils/forecast')
const address = process.argv[2]
if (!address){
    console.log("Please Provide an Address")
}else {
    geocode(address, (error, {latitude,longitude,location})=>{
        if (error){
            return console.log("Unable to load")
        }
        forecast(latitude, longitude, (error, forecasteData)=>{
            if (error){
                return console.log(error)
            }
            console.log(location)
            console.log(forecasteData)
        })
    })
}
