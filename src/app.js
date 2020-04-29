const path = require('path')
const express = require('express')

const app = express()

app.set('view engine', 'hbs')
app.use(express.static(path.join(__dirname, '../public')))

app.get('', (req, res) => {
  res.render('index', {
    title: 'Weather App',
    name: 'Kim McCaskill'
  })
})

app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About Me',
    name: 'Kim McCaskill'
  })
})

app.get('/help', (req, res) => {
  res.render('help', {
    title: 'Help Page',
    message: 'If you need help, you might be out of luck'
  })
})

app.get('/weather', (req, res) => {
  res.send({
    forecast: 'partly cloudy',
    location: 'Denver, CO'
  })
})

app.listen(3000, () => {
  console.log('Server is up on port 3000')
})