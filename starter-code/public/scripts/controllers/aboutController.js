'use strict';
var app = app || {};

(function(module) {
  const aboutController = {};
  // let aboutController = {};
  // DONE: Define a function that hides all main section elements, and then reveals just the #about section:
  aboutController.initNavView = function() {
    $('tab-content').hide();
    $('#about').show()
  }
  module.aboutController = aboutController;
})(app);
