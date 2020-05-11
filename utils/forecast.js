const req = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/eac249f113b09660207c64e93428e86d/' + latitude + ',' + longitude

    req({url, json: true}, (error, {body}) => {
        if (error){
            callback('Unable to connect to the location services!',undefined)
        }else if (body.error){
            callback('Unable to find location. Try another search.',undefined)
        }else {
            callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degrees out. There is a ' + body.currently.precipProbability + ' % chance of rain')
        }
    })
}

module.exports = forecast