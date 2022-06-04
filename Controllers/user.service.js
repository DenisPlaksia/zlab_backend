const User = require("./user");

class UserService {

  getAllUsers(){
    return userArray;
  }

  addUser(user){
    let newUser = new User(user["name"], user["email"], user["password"]);
    userArray.push(newUser);
    return userArray;
  }

  updateUser(updateUser){
    const updateUserIndex = userArray.findIndex(user => user.id === updateUser.id);
    let user = userArray.find(u => u.id === updateUser.id);

    user.name = updateUser.name;
    user.email = updateUser.email;
    user.password = updateUser.password;
    user.updatedAt = new Date(Date.now());
    userArray[updateUserIndex] = user;
  }

  deleteUser(userId){
    const userIndex = userArray.findIndex(user => user.id === userId.id);
    userArray.splice(userIndex, 1);
  }
}

const userArray = [
  new User("John", "a", "b"),
  new User("John2", "22a", "b2"),
  new User("John3", "22a", "b2"),
];

module.exports.UserService = new UserService();
