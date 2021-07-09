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
    <li><a href="#url">Hosted Link</a></li>
    <li><a href="#team">Team Members</a></li>
   
  </ol>
</details>


<div id="about-the-project" />

<!-- ABOUT THE PROJECT -->
## About The Project

[![Product Name Screen Shot][product-screenshot]](https://essencefest.netlify.app/)

A website for a space-themed college fest. The website allows you to login either as a user or as an admin.

A user can register themselves using a valid email id and a strong password. A verification mail is then sent on their email. Once verified, the user can register to the many events of the Essence fest. Users can also register for exciting pronites and buy fest-themed goodies. Users can see the list of events, pronites and goodies they have registered for in their user panel.

An admin can log in to their account with the proper credentials. Only admins have access to the admin panel. Admin panel displays a list of all the users registered on the website. Admins can also view the list of events, pronites and goodies the users have registered for. Moreover, the admin panel shows the most popular event, the most popular pronite show and the most popular goodie on their corresponding pages.


<div id="screenshots" />

## Screenshots



<div id="features" />

<!-- GETTING STARTED -->
## Features

<div id="frontend-features" />

- ### Frontend Features

<div id="frontend-features" />

- ### Backend Features

<div id="technologies-used" />

## Technologies, Libraries and Packages Used

<div id="frontend-tech-used" />

- ### Frontend
1. HTML
2. CSS
3. JavaScript
4. Particle.js
5. AOS.js
6. FontAwesome

<div id="backend-tech-used" />

- ### Backend
1. NodeJS
2. ExpressJS
3. Bcrypt
4. JsonWebToken
5. CORS
6. NodeMailer
7. Password-Validator
8. Router
9. Dotenv
10. Helmet
11. Compression


<div id="local-setup" />

## Local Setup

<div id="frontend-setup" />

+ ### Frontend

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

+ ### Backend

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
7. Create your own PostgresSQL Database locally or on ElephantSQL. Once hosted add the hosted URL in DB_URL in your .env file.
8. Add your E-mail Password in MAIL_PASS in .env file for nodemailers's SMTP to work.
9. Go to [this link](https://console.cloud.google.com/apis/credentials) to create your own Client ID and Client Secret to add OAUTH for your project and add it in your. env file under CLIENT_ID and CLIENT_SECRET.
10. Go to [this link](https://developers.google.com/oauthplayground/) and add your own Client ID and Client secret under oauth credentials. Select Gmail API v1 to generate your own access and refresh tokens. Store these tokens in your .env file under REFRESH_TOKEN and ACCESS_TOKEN.
11. Now on your terminal run this command to start your server
```sh 
npm run
```

<div id="url" />

## Hosted Link
[https://essencefest.netlify.app/](https://essencefest.netlify.app/)

<div id="team" />

<!-- CONTACT -->
## Team

Team Name - **Pilluzy**

<u>Team Members</u>
- [Shreshth Goyal](https://github.com/shreshthgoyal)  2020IMT-094
- [Rishabh Kumar](https://github.com/rish78)  2020IMT-078
- [Kshitij Ayush](https://github.com/kshitij-404)  2020IMT-047
# 

[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=for-the-badge
[contributors-url]: https://github.com/othneildrew/Best-README-Template/graphs/contributors
[product-screenshot]: assets/screenshot.pn
