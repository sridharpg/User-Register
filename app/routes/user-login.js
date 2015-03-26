import Ember from "ember";

export default Ember.Route.extend({

  model: function() {
  return this.store.find('user').catch(function () {
      // To Add: tansition the url to 500 internal server error
      alert("Sorry Something went Wrong");
    });
  },

  setupController: function(controller,model) {
    controller.set('content', model);
  }

});
