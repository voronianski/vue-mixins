(function() {
  module.exports = {
    mixins: [require("./vue")],
    computed: {
      cTransition: function() {
        return this.processTransition(this.transition);
      },
      cTransitionGroup: function() {
        return this.processTransitionGroup(this.transition);
      }
    },
    methods: {
      processTransitionGroup: function(name, options) {
        if (options == null) {
          options = {};
        }
        if (options.defaultName == null) {
          options.defaultName = "transition-group";
        }
        return this.processTransition(name, options);
      },
      processTransition: function(name, options) {
        if (options == null) {
          options = {};
        }
        return name;
      }
    }
  };

}).call(this);
