
// get #user and button elements
var usersEl = document.getElementById('users')
var btn = document.querySelector('button')

// attach fetch call to button element click

btn.onclick = function() {
  console.log('clicked')
  fetch("https://randomuser.me/api/?results=10&nat=us")
  .then(function(res){
    return res.json()
  })
  .then(function(res) {
    renderLocation(res.results)
  })
}

// use https://randomuser.me/api/?results=10&nat=us
// render users with image, name (h3), and phone/email as links, then a horizontal rule

function renderLocation(locations) {
  locations.forEach(function(loc) {
    var container = document.querySelector('input').value

// values
// weather.description: for cloudy, overcast, etc.
// weather.icon: for icon used with description
// main.temp: for current temperature
// main.feels_like: for feels like temperature


    // inserts an image for each user - img found in json file
    var img = document.createElement('img')
    img.src = loc.picture.medium
    container.appendChild(img)
    // inserts user title, name and last name
    var cityZip = document.createElement('h3')
    loc.textContent = loc.name.title + " " + loc.name.first + " " + loc.name.last
    container.appendChild(cityZip)
    // insert cell phone numbers
    var cell = document.createElement('a')
    cell.textContent = loc.cell
    cell.href = "tel:" + loc.cell
    container.appendChild(cell)
    // insert emails
    var email = document.createElement('a')
    email.textContent = loc.email
    email.href = "mailto:" + loc.email
    container.appendChild(email)
    // create a line below each div
    container.appendChild(document.createElement('hr'))

    usersEl.appendChild(container)
  })
}
