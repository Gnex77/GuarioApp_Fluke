module.exports = {
  getUsers: function getUsers() {
    var userData = JSON.parse(localStorage.getItem('users'));
    return userData;
  },
  addUser: function addUser(user) {
    var currentUserData = JSON.parse(localStorage.getItem('users'));
    currentUserData.push(user);
    localStorage.setItem('users', JSON.stringify(currentUserData));
  }
};
