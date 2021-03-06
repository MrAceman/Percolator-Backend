'use strict'

const Route = use('Route')

Route.on('/').render('welcome')

// Routes for User
// User Registration & Login
Route.post('/register', 'UserController.store')
Route.post('/login', 'UserController.login')
Route.get('/profile', 'UserController.show').middleware('auth')

// Routes for Events
// Grab user info to populate info on Create event form
Route.get('/event-create', 'EventController.createInit').middleware('auth')
// Create event for logged in/authorized user
Route.post('/event-create', 'EventController.store').middleware('auth')
// All events for single user
Route.get('/my-events', 'EventController.index').middleware('auth')
// Single host view of event for a single user
Route.get('host/my-events/:id', 'EventController.userSingleEvent').middleware('auth')
// Delete single event for a single user
Route.delete('host/my-events/:id', 'EventController.destroy').middleware('auth')
// Send email to single invited guest
Route.post('/', 'EventController.sendEmail')
// Run WE report for single RSVPed guest
Route.post('/runwe', 'EventController.runWEReport')

// Routes for EventsGuests
// Create the EventGuest relationship
Route.post('/createEventGuest', 'EventGuestController.createEventGuest')
Route.get('/event-guest/rsvp/:uuid', 'EventGuestController.guestEventView')
Route.post('/event-guest/rsvp/:uuid', 'EventGuestController.guestEventUpdate')

// Routes for Guests
// Single host view of guest
Route.post('/guests', 'GuestController.store').middleware('auth')
Route.post('/guests/we-report', 'GuestController.saveWEReport')
Route.get('/host/guests/:id', 'GuestController.fetchWEReport')
