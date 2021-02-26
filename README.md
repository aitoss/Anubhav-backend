# Anubhav-backend
<img src="https://img.shields.io/badge/code_style-standard-brightgreen.svg"> <img src="https://img.shields.io/badge/Node JS-v12.18.3-brightgreen.svg">
<img src="https://img.shields.io/badge/Express -v4.11.1-brightgreen.svg"> <img src="https://img.shields.io/badge/Mongoose-v5.11.18-brightgreen.svg">

Anubhav is a platform developed for AITians to read & share encounters of various interviews. Including interviews of big giants like Amazon, Google & Microsoft. This will surely help the upcoming batches of AIT.

* Portal Link - https://anubhav.aitoss.club 
* Front-End Repository - https://github.com/aitoss/Anubhav-frontend

---
### Contents
1. [Highlights](#highlights)
2. [Requirements](#requirements)
3. [Installation](#installation)
4. [Screens](#screens)
5. [Routes](#routes)
6. [Table Schema](#schema)
7. [Directory](#Directory)
8. [Contributions](#contribution)
9. [Copyright](#copyright)

---

## Highlights
* Anyone can share his/her experience of an interview to help students.
* Students who know someone and want his/her interview experience can request by providing a few details.
* Writing anonymously is also possible on Anubhav.
* In the future, we would extend this platform more than just Interview Experiences by adding more helpful features.
---
## Requirements:

* Node.js
* MongoDB
* Postman
* Studio3T or MongoDB Compass - Managing DB
---
## Installation

Fork the Repository in your machine then clone it in your machine (Replace your_username with your username)

```bash
git clone https://github.com/your_username/Anubhav-backend.git
```
Move into the project directory and install required dependencies

```bash
cd Anubhav-backend
npm install
```
Create .env file with following details:

```bash
PORT=5000
MONGO_URI=Mongo_Connection_URL
JWT_SECRET=secret_key
JWT_EXPIRES_IN=7d
JWT_COOKIE_EXPIRE=7d
CONTACT_EMAIL=your@email.id
CRYPTR_SECRET=your_secret_code
CLIENT_ID=your_secret_id
CLIENT_SECRET=your_secret
REFRESH_TOKEN=refresh_token
```
Replace the dummy values with your credentials (Never share .env file with anyone)

Run the command in your terminal to start the server

```bash
npm start
```
---

### Screens

#### Landing Page,
![Landing page](https://github.com/aitoss/Anubhav-backend/blob/main/gallery/Screenshot%20(184).png?raw=true)

#### Experience Page,
![Landing page](https://github.com/aitoss/Anubhav-backend/blob/main/gallery/Screenshot%20(185).png?raw=true)

#### Write Article Page,
![Landing page](https://github.com/aitoss/Anubhav-backend/blob/main/gallery/Screenshot%20(186).png?raw=true)

#### Request Article Page,
![Landing page](https://github.com/aitoss/Anubhav-backend/blob/main/gallery/Screenshot%20(187).png?raw=true)

### Routes
---

| Route  | Description | Signature |
| ------------- | ------------- | ------------- |
| /article |(post) Search for Host name and then creates a new Visitor Entry in MongoDB | Body: { `title`, `typeOfArticle`, `companyName`, `companyDomainName`, `createdAt` , `description`, `articleTags`, `isAuthentic`, `showName`,`author`} |
| /auth |(post) Update the Checkout time of Visitor in MongoDB  | Body: { `name`, `email`, `aitBatch`, `linkedIn`, `createdAt`} |
| /user |(post) Add new Host Entry in MongoDB  | Body: { `name`, `email`, `password`, `username`, `createdAt`, `role`} |
| /request_article |(get) Get array of host list form MongoDB  | Body: { `requesterName`, `requesteeName`, `requesteeContact`, `company`, `note`}|
| /feedback |(post) Send email using nodemailer modular  | Body: { `article`, `feedback`, `rating`, `creationDate`} |

### Schema
---
#### Article Schema
![image](https://github.com/aitoss/Anubhav-backend/blob/main/gallery/Screenshot%20(190).png?raw=true)

#### Author Schema
![image](https://github.com/aitoss/Anubhav-backend/blob/main/gallery/Screenshot%20(191).png?raw=true)

#### Feedback Schema
![image](https://github.com/aitoss/Anubhav-backend/blob/main/gallery/Screenshot%20(192).png?raw=true)

#### Request Article Schema
![image](https://github.com/aitoss/Anubhav-backend/blob/main/gallery/Screenshot%20(193).png?raw=true)

#### User Schema
![image](https://github.com/aitoss/Anubhav-backend/blob/main/gallery/Screenshot%20(194).png?raw=true)

### Directory 
![image](https://github.com/aitoss/Anubhav-backend/blob/main/gallery/Screenshot%20(188).png?raw=true)

---
## Contribution 
Never push your code to master branch
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

---

## Copyright 
If you are thinking to use this application for your community/college, We would love to see AIT OSS CLUB mention at your hosted application.

Made with ❤ by [OSS Club](https://aitoss.club).
