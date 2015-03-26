import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('userLogin', {path: '/'} );
  this.resource('users', {
    path: '/users'
  },function() {
    this.resource('user', {
      path: ':user_id'
    });
  });
});

export default Router;
