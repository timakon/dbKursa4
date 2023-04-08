const mongoose = require('mongoose');
const sqlite3 = require('sqlite3').verbose();

// MongoDB Connection
const MONGO_DB_URL = 'mongodb://localhost:27017/network';
mongoose.connect(MONGO_DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const mongoDb = mongoose.connection;

// SQLite Connection
const SQLITE_DB_FILE = './my_database.sqlite';
const sqliteDb = new sqlite3.Database(SQLITE_DB_FILE, (error) => {
  if (error) {
    console.error('SQLite connection failed:', error);
    throw error;
  }
});

module.exports = {
  mongoDb,
  sqliteDb,
};