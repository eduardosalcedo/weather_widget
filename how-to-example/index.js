// fetch('https://randomuser.me/api') // make the request
// .then(function(res) {
//   return res.json() // when the response is received, convert to json
// })
// .then(function(res) { // res for "response"
//   console.log(res) // when the json is converted, log it
//   console.log('Here') // note this will log BEFORE fetch is finished
// })
// .catch(function(err) { // if there is an error, this will log it
//   console.log(err)
// })
// .finally(function() {
//   console.log('last')
// })

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
    renderUsers(res.results)
  })
}

// use https://randomuser.me/api/?results=10&nat=us
// render users with image, name (h3), and phone/email as links, then a horizontal rule

function renderUsers(users) {
  users.forEach(function(user) {
    var container = document.createElement('div') // creates an empty div for each user
    // inserts an image for each user - img found in json file
    var img = document.createElement('img')
    img.style = "float: left; margin-right: 12px;"
    img.src = user.picture.medium
    container.appendChild(img)
    // inserts user title, name and last name
    var username = document.createElement('h3')
    username.textContent = user.name.title + " " + user.name.first + " " + user.name.last
    container.appendChild(username)
    // insert cell phone numbers
    var cell = document.createElement('a')
    cell.textContent = user.cell
    cell.href = "tel:" + user.cell
    container.appendChild(cell)
    // insert emails
    var email = document.createElement('a')
    email.textContent = user.email
    email.href = "mailto:" + user.email
    container.appendChild(email)
    // create a line below each div
    container.appendChild(document.createElement('hr'))

    usersEl.appendChild(container)
  })
}









// ---------------------------------------------------------
// lOOPS used to return the cell phone numbers for all users
// Regular FOR loop
// for(var i = 0, i < res.results.length; i++) {
// var user = res.results[i]
//  console.log(user.cell)
// }
// FOR EACH lOOP - functional loop
// res.results.forEach(function(user) {

// console.log(user.cell)
// })

// FOR of LOOP
// for (var user of res.results) {
//  console.log(user.cell)
//}
