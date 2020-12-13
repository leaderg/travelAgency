#Travel Agency App
This is a basic full stack application utilizing Postgres, React, Express, and Node. Material UI was used for the front end GUI and Knex was used for the back end database queries. This was a good learning exercise as I hadn't had any experience with Material UI.

##Requirements
-NPM
-Postgres

##Installation
1. Clone Repo
2. In Terminal Run ```npm install``` at the main directory to install server dependancies.
3. In terminal Run ```cd travel-agency/``` and ```npm install``` to install client dependancies
4. Create a Postgres database for the project. "travelAgency" is currently used in the knex config.
5. In the main directory configure development.connection in ```knexfile (public).js``` to your proper database connection.
6. Rename ```knexfile (public).js``` to ```knexfile.js```
7. In terminal in the main directory run ```knex migrate:latest```
8. In terminal in the main directory run ```knex seed:run```
9. In seperate terminal tabs run ```npm start``` in both the main directory and /travel-agency/ to start the back end and client.
10. The server should now be active on localhost:8080 and the client on localhost:3000.

##Comments and Notes
-First time using Material UI. Pleased with the results, will investigate the framework further in the future.
-Dates are handled as a string in the database and parsed on the front end with moment.
-The application is lacking authentication and error handling aside from Database Not Null and the form validation.
-There is no pagination for the detailed quotes call. Could be added to lighten browser/data loads.
-A JSON with city names, airport codes, and coordinates can be added in the future for quote form autocomplete and database standardization. Currently it just uses user inputed strings. The quote detail modal is pretty plain and an image of a map with the flight from departure to destination could spruce it up.