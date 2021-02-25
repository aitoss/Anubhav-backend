# Anubhav-backend
Anubhav is a platform developed for AITians to read & share encounters of various interviews. Including interviews of big giants like Amazon, Google & Microsoft. This will surely help the upcoming batches of AIT.


# Highlights
* Anyone can share his/her experience of an interview to help students.
* Students who know someone and want his/her interview experience can request by providing a few details.
* Writing anonymously is also possible on Anubhav.
* In the future, we would extend this platform more than just Interview Experiences by adding more helpful features.

# Requirements:

* node.js - evented I/O for the backend
* Express - fast node.js network app framework
* MongoDB - Database Program
* Postman - API Client
* Studio3T or MongoDB Compass - Managing DB

## Installation

Fork the Repository in your machine then clone it in your machine (Replace your_username with your username)

```bash
git clone https://github.com/your_username/oss-website-backend.git
```
Move into the project directory and install required dependencies

```bash
cd oss-website-backend
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
<hr>

## For Contribution 
Never push your code to master branch
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.
