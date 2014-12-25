Template.PasswordEdit.events({
  'submit #form-password-create': function(e) {
    e.preventDefault();

    var $form = $(e.currentTarget);
    var fields = PR.getForm($form);

    if (!fields.title) {
      alert("Title is required");
    }

    if (!fields.username) {
      alert('username is required');
    }

    if (!fields.password) {
      alert('password is required');
    }

    if (this._id) {
      fields.updatedAt = new Date();
      Passwords.update(this._id, {
        $set: fields
      });
    } else {
      fields.createdAt = new Date();
      fields.createdBy = Meteor.userId();
      Passwords.insert(fields);
    }

    Router.go('/');
  }
});
