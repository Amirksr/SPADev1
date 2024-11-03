# repo introduction
Hello and Greetings,

The project you are viewing is a website for selling educational courses and programming articles, designed as a Single Page Application (SPA). It is made responsive for various gadgets using the React Bootstrap package. For the project's navbar, a hamburger menu is considered for screens smaller than 'md', which opens an offcanvas when clicked, linking to the project's pages.

Initially, the project's data was fetched from a db.json file using the fake API of json-server. However, due to issues in retrieving data with this API during deployment, we used a separate server designed for this purpose and hosted on Vercel. We resolved the issue by sending our HTTP requests, created with the axios package, to the relevant server links.

In the articles page of this website, functionalities for adding, deleting, and editing articles are provided. Each action triggers an alert window designed with the sweetalert2 package, which completes the action upon user confirmation.

Another feature of this website is displaying a user panel upon successful login. This occurs when the information entered in the login form matches the user data stored in the database.You can use these usernames and passwords to test login:

user : amir pass : 123456 & user : milad pass : 12345

This project is purely intended to demonstrate the developer's readiness in creating SPA websites and understanding fundamental concepts in React
## demo
click [here](https://spa-dev1.vercel.app/) to see demo