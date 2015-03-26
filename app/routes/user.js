import Ember from "ember";

export default Ember.Route.extend({
  model: function(param){
    return this.store.find('user',param.user_id).catch(function(){
      alert("Something went wrong.. Try reloading");
    });
  }
});
