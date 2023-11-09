// importing and configuring environment variables
require("dotenv").config();

configurations = {
  db: `mongodb+srv://${process.env.DB_username}:${process.env.DB_password}@cluster0.nspbzep.mongodb.net/autorama`,
};

module.exports = configurations;
