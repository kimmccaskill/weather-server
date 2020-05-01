console.log('Clientside js loaded')
const weatherForm = document.querySelector('form')
const searchInput = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

const getWeather = (address) => {
  fetch(`http://localhost:3000/weather?address=${address}`)
    .then(res => res.json())
    .then(data => {
      if (data.error) {
        messageOne.textContent = data.error
      } else {
        messageOne.textContent = data.location
        messageTwo.textContent = data.forecast
      }
    })
}

weatherForm.addEventListener('submit', (e) => {
  e.preventDefault()
  const location = searchInput.value
  messageOne.textContent = 'Loading...'
  messageTwo.textContent = ''
  getWeather(location)
})