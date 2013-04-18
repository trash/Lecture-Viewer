'use strict';

angular.module('lectureApp')
  .factory('lecture', function () {
    var loggedIn = false;

    var users = {
      'user@user.com': {
        email: 'user@user.com',
        pass: 'user',
        classes: ['CS666']
      },
      'bro@bro.com' : {
        email: 'bro@bro.com',
        pass: 'bro',
        classes: ['CS1337']
      }
    };

    // Public API here
    return {
      addUser: function (user) {
        if (users[user.email] === undefined) {
          users[user.email] = user;
          return true;
        }
        else
          return false;
      },
      login: function (user, pass) {
        if (users[user] !== undefined && users[user].pass === pass) {
          loggedIn = users[user];
          return true;
        }
        else
          return false;
      },
      logout: function () {
        loggedIn = false;
      },
      currentUser: function () {
        return loggedIn;
      }
    };
  });
