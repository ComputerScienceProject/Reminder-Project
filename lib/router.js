Router.route('/', function() {
  // render PasswordList for route /

  // tarayicidan '/' urlsine girildiginde PasswordList template'i gosterilecek
  this.render('PasswordList', {
    data: function() {
      // bu url'de Passwords.search'den search_keyword'in icindeki degerle search ediliyor
      // get all passwords for now
      return Passwords.search(Session.get('search_keyword'));
    }
  });
}, {
  name: 'home'
});

Router.route('/password/add', function() {
  this.redirect('password.edit');
});

Router.route('/password/edit/:_id?', function() {
  this.render('PasswordEdit', {
    data: function() {
      return Passwords.findOne(this.params._id);
    }
  })
}, {
  name: 'password.edit'
});

Router.route('/about', function() {
  this.render('About');
}, {
  name: 'about'
});

Router.onBeforeAction(function(pause) {
  this.layout('DefaultLayout');
  this.next();
});

Router.onBeforeAction(function() {
  if (!Meteor.userId()) {
    this.render('About');
  } else {
    this.next();
  }
}, {
  except: ['about']
});
