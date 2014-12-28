PR = {
  isAdmin: function() {
    return Meteor.users.isAdmin();
  },

  getForm: function($form) {
    var fields = {};

    _.each($form.serializeArray(), function(field) {
      fields[field.name] = field.value;
    });

    return fields;
  }
};

UI.registerHelper('PR', function() {
  return PR;
});
