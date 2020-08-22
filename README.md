# Project Name

The Phantom Cook

# Description

Eat well close to your door.

User Stories
404 - As a user I want to see a nice 404 page when I go to a page that doesn’t exist so that I know it was my fault
500 - As a user I want to see a nice error page when the super team screws it up so that I know that is not my fault
homepage - As a user I want to be able to access the homepage so that I see what the app is about and login and signup
USER
sign up - As a user I want to sign up on the webpage so that I can see all the menus that I could order
login - As a user I want to be able to log in on the webpage so that I can get back to my account and orders
logout - As a user I want to be able to log out from the webpage so that I can make sure no one will access my account
PHAMTOM COOK
sign up - As a cook I want to sign up on the webpage so that I can see all the menus and orders that I could attend
login - As a user I want to be able to log in on the webpage so that I can get back to my account
logout - As a user I want to be able to log out from the webpage so that I can make sure no one will access my account

menu list - As a user I want to see all the events available so that I can choose which ones I want to attend
menu create - As a user I want to create an event so that I can invite others to attend
menu detail - As a user I want to see the event details and attendee list of one event so that I can decide if I want to attend
menu confirm - As a user I want to be able to attend to event so that the organizers can count me in
Backlog
List of other features outside of the MVPs scope

User profile:

see my profile
upload my profile picture
see other users profile
list of events created by the user
list events the user is attending
Geo Location:

add geolocation to events when creating
show event in a map in event detail page
show all events in a map in the event list page
Homepage

...
ROUTES:
GET /

renders the homepage
GET /auth/signup

redirects to / if user logged in
renders the signup form (with flash msg)
POST /auth/signup

redirects to / if user logged in
body:
username
email
password
GET /auth/login

redirects to / if user logged in
renders the login form (with flash msg)
POST /auth/login

redirects to / if user logged in
body:
username
password
POST /auth/logout

body: (empty)
GET /events

renders the event list + the create form
POST /events/create

redirects to / if user is anonymous
body:
name
date
location
description
GET /events/:id

renders the event detail page
includes the list of attendees
attend button if user not attending yet
POST /events/:id/attend

redirects to / if user is anonymous
body: (empty - the user is already stored in the session)
Models
User model

username: String
password: String
Event model

owner: ObjectId<User>
name: String
description: String
date: Date
location: String
attendees: [ObjectId<User>]
Links
Trello
Link to your trello board or picture of your physical board

Git
The url to your repository and to your deployed project

Repository Link

Deploy Link

Slides
The url to your presentation slides

Slides Link

# the_foodie_phantom

Second module project: mongodb, mongoose, express, node, npm, hbs

# struture

1 Bin
├── bin - www
2 Models
├── user
├── cooks
├── menu
3 Configs
├── db.config.js
├── session.config.js
├── cloudinary.config.js
4 -Routes
├── auth.routes.js
├── index.js
├── orders
│ ├── menu.js
│ └── confirmed.order.js

5 views
├── userAuth
│ ├── userLogin.hbs
│ └── userSignup.hbs
├── cookAuth
│ ├── cookLogin.hbs
│ └── cookSignup.hbs
├── error.hbs
├── index.hbs
├── layout.hbs
├── not-found.hbs
└── users
└── userProfile.hbs
└── (menu display)main.hbs
└── (confirmed order) private1.hbs

└── cooks
└── cookProfile.hbs
└── (menu post) main.hbs
└── (confirmed order) private2.hbs

5 .env
6 .gitingnore
7 app.js
8 pacage.json
9 readme.md

