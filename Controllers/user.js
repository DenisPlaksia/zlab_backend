const uuid = require('uuid');

class User {
  id;
  name;
  email;
  password;
  createdAt;
  updatedAt;

  constructor(name, email, password) {
    this.id = uuid.v4();
    this.name = name;
    this.email = email;
    this.password = password;
    this.createdAt = new Date(Date.now());
    this.updatedAt = null;
  }
}

module.exports = User;
