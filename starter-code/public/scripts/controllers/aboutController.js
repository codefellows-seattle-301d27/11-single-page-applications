'use strict';
var app = app || {};

(function(module) {
  const aboutController = {};

  // TODO: DONE Define a function that hides all main section elements, and then reveals just the #about section:
  aboutController.initAboutView = function() {
    $('.tab-content').hide();
    $('#about').show();
  }

  module.aboutController = aboutController;
})(app);
