Passwords = new Meteor.Collection('passwords');

Passwords.search = function(keyword) {
  var selector = {
    createdBy: Meteor.userId()
  };

if (!_.isEmpty(keyword)) {
    // create a regexp to match our keyword
    var reg = new RegExp(keyword, 'ig');
