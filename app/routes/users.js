import Ember from "ember";

export default Ember.Route.extend({
  model: function(){
    return this.store.find('user').catch(function(){
      alert("Something went wrong.. Try reloading");
    });
  }
});
