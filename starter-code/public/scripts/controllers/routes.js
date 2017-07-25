'use strict';
var app = app || {};

// DONE: Configure routes for this app with page.js,
// by registering each URL your app can handle, linked to a a single controller
// function to handle it. Note that these routes do not need to wrapped in an IIFE.
// est 15min act 30min

// for index.html
page('/', app.articleController.initArticleController);
// for about
page('/about', app.aboutController.initAboutController);

// DONE: What function do you call to activate page.js? Fire it off now, to execute.
// Note that it does not need to be attached to the 'app' object nor wrapped in an IIFE.
// est 10min act 15min
page();
