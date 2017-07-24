'use strict';
var app = app || {};

(function(module) {
  const aboutController = {};

  // DONE: Define a function that hides all main section elements, and then reveals just the #about section:
  // estimate 10 min, actual 5 min

  aboutController.initAboutView = function (){
    $('.tab-content').hide();
    $('#about').show();
  }

  module.aboutController = aboutController;
})(app);
