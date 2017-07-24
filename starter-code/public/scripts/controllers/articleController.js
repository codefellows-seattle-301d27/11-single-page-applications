'use strict';
var app = app || {};

(function(module) {
  const articleController = {};
  // DONE: Setup a function that kicks off the fetching and rendering of articles, using the same
  // code that used to be in index.html.
  // Also be sure to hide all the main section elements, and reveal the #articles section:
  articleController.initArticleSection = function() {
    app.Article.fetchAll(app.articleView.initIndexPage);
    $('.tab-content').hide()
    $('#articles').show()
  }

  module.articleController = articleController;
})(app);
