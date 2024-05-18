const express = require('express')
const server = express()
const port = 8080

import fetch from 'node-fetch'

server.get('/cours', async (req, res) => {
    // Adress of rates from BCE in XML format
    const adress = 'https://www.ecb.europa.eu/stats/eurofxref/eurofxref-daily.xml'

    try {
      const data = await fetch(adress)
        .then(response => {
           if (response.ok === false) {
             return Promise.reject('Error in collect data')
           }
    
           return response.text()
  })

      res.status(200).send(data)
}   catch(err) {

}   res.status(503).send(err)

})

server.listen(port, () => {
    console.log(`Le serveur est démarré sur le port ${port}`)
})