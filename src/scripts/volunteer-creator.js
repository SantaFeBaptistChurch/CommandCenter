const Convert = require('./volunteer-checker')

let something = {
    "volunteer_1": {
      "title": "Bro.",
      "first": "James",
      "last": "The Third",
      "phone": 15555555555,
      "email": "that_dude@email.com",
      "schedule": 0
    }
  }

const welcome = Convert.toVolunteer(something)
console.log(welcome)