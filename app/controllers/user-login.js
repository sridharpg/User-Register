import Ember from "ember";

export default Ember.Controller.extend({
  actions:{
    validateLoginDetails: function(){
      var name = this.get('name'),
          password = this.get('password'),
          usersList = this.get('content'),
          isValidUser = false;

      usersList.forEach(function(user){
        if(user.get('name') === name && user.get('password') === password) {
          isValidUser = true;
        }
      });

      if(isValidUser){
        this.transitionToRoute('users');
      } else {
        alert("Your name or password is invalid. Enter a valid one");
      }
    }
  }
});
