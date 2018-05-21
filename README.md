# NodeJS Boilerplate
Author: Scott Ramsey

## Application Details

    Routing Engine - Express
    View Engine - Handlebars
    UI Layout - Materialize CSS
    Icon Set - Font Awesome
    UI Scripting - JQuery

## Project Structure
    -home
        -bins
            -www => Application entry point

        -controllers => View helpers
            -dashboard.js
            -index.js
            -layout.js

        -public
            -css
                -style.css => Application style sheet
            -images => Application images
                -favicon.ico
                -gigya.logo

        -routes
            -route.js => Application routes

        -ssl => SSL certificate and key
            -server.crt
            -server.csr
            -server.key

        -views
            -partials => Reusable UI components
                -nav.hbs => top UI navigation bar
            -dashboard.hbs => Dashboard view
            -error.hbs => Error page view
            -index.hbs => Home page view
            -layout.hbs => Master layout

        -.env => Application variables
        -app.js => Application configuration, setup, and initialization
        -config.js => Route configuration for views and helpers
        -package.json => npm package dependencies
        -README.md => this file

## Installation
1) Insall Node.js
    https://nodejs.org/en/download/
2) Download package dependencies
    > npm install
    > npm install -g nodemon
3) Run application
    > nodemon

## Application Variables
The application variables are located in the ".env" file.

## Port Binding
This application binds on the default ports 80 (http) and 443 (https). If the application
is unable to bind on these ports because they already may be in use, consider changing
the port parameters in the ".env" file. Alternatively, try 8080 (http) and 8443 (https).

## Transportation Security
This application uses a self-signed ssl certificate which throws an 
"Your connection is not private" exception. Just click "ADVANCED" -> "Proceed to localhost (unsafe)".

Additionally, the application rewrites all http traffic to https.

## Routing
Serving static content
    The static content routes are generic and determine the content to serve based on the 
    route configurations in the "config.js" file. This allows for the adding/removing of
    routes without modifying the route file itself.