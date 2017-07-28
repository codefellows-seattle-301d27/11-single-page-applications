'use strict';
var app = app || {};

// DONE: Configure routes for this app with page.js, by registering each URL your app can handle, linked to a a single controller function to handle it. Note that these routes do not need to wrapped in an IIFE.
// estimate 5 min, actual 3 min
page('/', app.articleController.initArticleView);

page('/about', app.aboutController.initAboutView);

page('/admin', app.adminController.initAdminView);

// DONE: What function do you call to activate page.js? Fire it off now, to execute. Note that it does not need to be attached to the 'app' object nor wrapped in an IIFE.
// estimate 5 min, actual 3 min

page();
