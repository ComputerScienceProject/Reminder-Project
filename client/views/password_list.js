Template.PasswordList.events({
  'click .btn-remove': function() {
    Passwords.remove(this._id);
  },

  'keyup .search': function(e) {
    var $el = $(e.currentTarget);
    Session.set('search_keyword', $el.val());
  }
});