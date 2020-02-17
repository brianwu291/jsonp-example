const express = require('express')
const app = express()
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(express.static('public'))

app.get('/app/jsonp', (req, res) => {
  const responseData = { data: [{ id: 1, name: 'Brian' }, { id: 2, name: 'Peter' }] }
  const responseDataText = JSON.stringify(responseData)
  res.send(`jsonpCallback(${responseDataText})`)
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log('Listening at ' + PORT)
})
