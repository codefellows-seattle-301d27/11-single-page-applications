'use strict';

// STRETCH GOAL: add controller to admin site
(function(module) {
  const adminController = {};

  adminController.initAdminView = function() {
    $('.tab-content').hide();
    $('#admin').show();
  }

  module.adminController = adminController;
})(app)
