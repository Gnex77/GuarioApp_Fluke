module.exports = {
  // Load Mock Product Data Into localStorage
  init: function() {
    localStorage.clear();
    localStorage.setItem('users', JSON.stringify([
      'Dylan, Bob',
      'Tyler, Steve',
      'Wilson, Ann',
      'Rodgers, Steve',
      'Stark, Tony'
    ]));
  }

};
