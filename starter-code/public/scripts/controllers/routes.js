'use strict';
var app = app || {};

// TODO: Configure routes for this app with page.js,
// by registering each URL your app can handle, linked to a a single controller
// function to handle it. Note that these routes do not need to wrapped in an IIFE.

// for index.html
page('/', app.articleController.initArticleController);
// for admin.html
// page('/admin', app.adminView.initAdminPage());
// // for new.html
// page('/new', app.newArticle.initNewArticlePage());
// for about
page('/about', app.aboutController.initAboutController);

// TODO: What function do you call to activate page.js? Fire it off now, to execute.
// Note that it does not need to be attached to the 'app' object nor wrapped in an IIFE.
