[![Contributors][contributors-shield]][contributors-url]
<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/othneildrew/Best-README-Template">
    <img src="assets/icon.png" alt="Logo" width="80" height="80">
  </a>

  <h1 align="center">ESSENCE 2021</h1>

  <p align="center">
  Hey sky, take your hats off. We are on our way! 🚀
   <br />
  </p>
</p>



<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      </li>
    <li>
      <a href="#screenshots">Screenshots</a>
      </li>
     <li><a href="#url">Hosted Link</a></li>
    <li><a href="#features">Features</a>
    <ul>
    <li> <a href="#frontend-features">Frontend Features</a></li>
    <li> <a href="#backend-features">Backend Features</a></li>
    </ul>
    </li>
    <li><a href="#technologies-used">Technologies, Libraries and Packages Used</a>
    <ul>
    <li> <a href="#frontend-tech-used">Frontend</a></li>
    <li> <a href="#backend-tech-used">Backend</a></li>
    </ul></li>
    <li><a href="#local-setup">Local Setup</a>
    <ul>
    <li> <a href="#frontend-setup">Frontend</a></li>
    <li> <a href="#backend-setup">Backend</a></li>
    </ul></li>
    <li><a href="#team">Team Members</a></li>
  </ol>
</details>


<div id="about-the-project" />

<!-- ABOUT THE PROJECT -->
# About The Project

[![Product Name Screen Shot][product-screenshot]](https://essencefest.netlify.app/)

A website for a space-themed college fest. The website allows you to login either as a user or as an admin.

A user can register themselves using a valid email id and a strong password. A verification mail is then sent on their email. Once verified, the user can register to the many events of the Essence fest. Users can also register for exciting pronites and buy fest-themed goodies. Users can see the list of events, pronites and goodies they have registered for in their user panel.

An admin can log in to their account with the proper credentials. Only admins have access to the admin panel. Admin panel displays a list of all the users registered on the website. Admins can also view the list of events, pronites and goodies the users have registered for. Moreover, the admin panel shows the most popular event, the most popular pronite show and the most popular goodie on their corresponding pages.

<div id="screenshots" />

# Screenshots

Screenshots of our website our added to [this link](https://photos.app.goo.gl/f2B7A9oghGFgEfRh8).

<div id="url" />

# Hosted Link
[https://essencefest.netlify.app/](https://essencefest.netlify.app/)

> <u>**For Testing Purpose Only**</u> 
> **User Credentials** : 
> Email : wijidat614@eyeremind.com
> Password : PASSword123

<div id="features" />

<!-- GETTING STARTED -->
# Features

<div id="frontend-features" />

## Frontend Features
### **User**
---
   - Website is made responsive and funcitonal for mobile users also. So users on any device can get access to our website.
   - On the off-chance if the verification mail is delayed after registration, User can listen to some songs via music player added.
   - There is a countdown on the landing page which show the number of days left for the fest.
   - User's session is stored in the browser hence he retains his login in the browser.
   - Each User has his own Profile page where he/she can see which events/pronites have they registered and which goodies they have bought.
   - Users can sign in themselves and view all the events with their required details.
   - Each event has its own dedicated page and Registration link.
   - Users can buy any goodie at any quantity.
   - Users can register themselves for pronites.
   - Users can log out of the website and hence terminate their session from the browser.

### **Admin**
---
 - Admin can get the information about all the users except their passwords.
 - Admin get the statistics of users,events,goodies and pronites in the admin panel.
 - Admin have the table consisting of users with what events they are registered too.
 - Admin have the table consisting of users with what pronites they are registered too.
 - Admins have the table consisting of users with what goodies they have bought.
 - Admins can log out from the admin panel and hence terminate their session from the browser.

<div id="frontend-features" />

## Backend Features

### **Routes**
---
  - **User Routes**
     - Register : To register the user
     - Login    : To sign in the user
     - Verify   : Sends an email verification link to the user
     - Dashboard : To take all the information about the user
     - Event     : To get information about the registered events
     - Pronite   : To get information about the registered pronites
     - Goodies   : To get information about goodies bought by the user.
   - **Events**
     - Eventregn : To register the user to an event.
     - Eventunregister : To unregister the user from an event.
   - **Pronite**
     - Proniteregn : To register the user to a pronite.
     - Proniteunregister : To unregister the user from a pronite.
   - **Goodies**
     - Goodiepurchase : For purchasing the goodie.
   - **Admin**
     - Login : To login the Admin
     - Users : To get all the required information about users.
     - Events : To get list of users registered in events.
     - Goodies : To get list of all users who purchased goodies.
     - Pronites : To get list of all users registered to pronites.

### **Security**
---
- SQL Injection
  - User is logged in to site through E-mail Verification system.
  - We used parameterized queries and input validation to prevent SQL Injection attacks.
- User Authentication
  - We added Password Validation for users to enter strong passwords.
  - Passwords are not stored as plain-texts they are hashed and salted then stored in the database.
  - No critical information like the password of the user is sent into the session.
  - We enable OAuth 2.0 via Google Cloud's Gmail API v1 to get access to user's email in a secure delegated manner.
 - Cross-Site Scripting Attacks
   - We enabled CORS to permit loading of resources from other sites.
   - We enabled Helmet in our backend which prevents our website from XSS attacks upto some extent.
   - Helmet provieds our site with Content-Security-Policy (CSP) which also prevents XSS attacks.

> We enabled compression middleware to compress response bodies for all request that traverse through the middleware. 

<div id="technologies-used" />

# Technologies, Libraries and Packages Used

<div id="frontend-tech-used" />

- ## Frontend
1. HTML
2. CSS
3. JavaScript
4. Particle.js
5. AOS.js
6. FontAwesome
7. SweetAlerts2

<div id="backend-tech-used" />

- ## Backend
1. NodeJS
2. ExpressJS
3. Nodemon
4. Bcrypt
5. JsonWebToken
6. CORS
7. NodeMailer
8. pg
9. Password-Validator
10. Router
11. Dotenv
12. Helmet
13. Compression


<div id="local-setup" />

# Local Setup

<div id="frontend-setup" />

+ ## Frontend

1. Fork the repository.
2. Clone the repository
    ```sh
    git clone https://github.com/shreshthgoyal/Essence-Frontend.git
    ```
3. Open the folder in which you cloned the repository.
4. Open all the files in your code editor
   ```sh
    code .
   ```
5. Open index.html to go to the landing page of the website.

<div id="backend-setup" />

+ ## Backend

1. Fork the repository.
2. Clone the repository
   ```sh
    git clone https://github.com/shreshthgoyal/Essence-Backend.git
    ```
3. Open the folder in which you cloned the repository.
4. Run this command to install all the packages
    ```sh
    npm install
    ```
5. Create a new .env file to store required enviorment variables.
6. Create your own secret key to hash and salt passwords and store it in SECRET_KEY in your .env file.
7. Create your own PostgresSQL Database locally or on ElephantSQL. All the PSQL queries are present in database folder.
8. Once hosted add the hosted URL in DB_URL in your .env file.
9. Add your E-mail Password in MAIL_PASS in .env file for nodemailers's SMTP to work.
10. Go to [this link](https://console.cloud.google.com/apis/credentials) to create your own Client ID and Client Secret to add OAUTH for your project and add it in your. env file under CLIENT_ID and CLIENT_SECRET.
11. Go to [this link](https://developers.google.com/oauthplayground/) and add your own Client ID and Client secret under oauth credentials. Select Gmail API v1 to generate your own access and refresh tokens. Store these tokens in your .env file under REFRESH_TOKEN and ACCESS_TOKEN.
12. Now on your terminal run this command to start your server
```sh 
npm run
```

<div id="team" />

<!-- CONTACT -->
# Team

Team Name - **Pilluzy**

- #### Team Members
     - [Shreshth Goyal](https://github.com/shreshthgoyal)  2020IMT-094
    - [Rishabh Kumar](https://github.com/rish78)  2020IMT-078
   - [Kshitij Ayush](https://github.com/kshitij-404)  2020IMT-047
# 

[contributors-shield]: https://img.shields.io/github/contributors/shreshthgoyal/Essence-Frontend.svg?style=for-the-badge
[contributors-url]: https://github.com/shreshthgoyal/Essence-Frontend/graphs/contributors
[product-screenshot]: assets/screenshot.png
