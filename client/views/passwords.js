Passwords = new Meteor.Collection('passwords');

Passwords.search = function(keyword) {
  var selector = {
    createdBy: Meteor.userId()
  };

