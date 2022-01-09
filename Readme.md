# Overview

The Stratton Report is an application that allows a user to purchase a lift ticket, and check the latest weather conditions on the mountain using the OpenWeather API.

When a ticket is purchased, the user has the opportunity to enter in various data points, including an opt in to recieve an email or SMS. The opt in triggers a flow in the Klaviyo platform to notify the user on the day of their ski ticket of the latest weather conditions on the mountain.

# MVP

1.  Create new profiles in the Klaviyo Platform
2.  Track the day the ticket is purchased for and if the user opts into additonal communication
3.  Render current weather data using Open Weather API
4.  Use Data Feeds in Klaviyo platform to populate marketing content

# Post MVP

1.  User authentication
2.  Ability to track multiple days per user (I.e bought tickets for friday and saturday)
3.  Build custom API to further customize the data feed into the Klaviyo platform.
4.  Form validation

# Technologies

1.  HTML
2.  CSS
3.  Javascript
4.  OpenWeather API
5.  Klaviyo Identify API

The tech stack chosen was meant to keep this application as simple as possible. By writting DRY and reapetable code, this script can be lightly modified to pull and push data to any ski mountain's Klaviyo account.

# Properties

1. Email
2. Phone Number
3. Name
4. Ticket Quantity (ticketQty)
5. Date of ticket (skiDate)
6. Email/SMS opt in (optStatus)

# How to use the data in Klaviyo

1.  There are two sources of incoming data to your Klaviyo account, profiles created on the front-end through the form, and the weather data feed.
2.  A custom flow has been created to allow a Klaviyo admin to automatically add all users who have opted in (opt = true) to the Stratton Report to be notified of the current weather on the morning of their lift ticket date.
3.  The data feed api call should be modified to represent the correct location if that needs to be changed from Stratton.
