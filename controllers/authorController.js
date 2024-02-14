const Author = require("../models/author");
const asyncHandler = require("express-async-handler");

// Display list of all Authors.
exports.author_list = asyncHandler(async (req, res, next) => {
    res.send("Not implemented: Author list");
});

// Display detail page for a specific author
exports.author_detail = asyncHandler(async (req, res, next) => {
    res.send(`Not implemented: Author detail: ${req.params.id}`);
});

// Display Author create form on GET
exports.author_create_get = asyncHandler(async (req, res, next) => {
    res.send("Not implemented: Author create GET");
});

// Handle Author create on POST
exports.author_create_post = asyncHandler(async (req, res, next) => {
    res.send("Not implemented: Author create POST");
});

// Display Author delete form on GET
exports.author_delete_get = asyncHandler(async (req, res, next) => {
    res.send("Not implemented: Author delete GET");
});

// Display Author delete on POST
exports.author_delete_post = asyncHandler(async (req, res, next) => {
    res.send("Not implemented: Author delte post");
});

// Display Author update form on GET
exports.author_update_get = asyncHandler(async (req, res, next) => {
    res.send("Not implemented: Author update GET");
});

// DHandle Author update on POST
exports.author_update_post = asyncHandler(async (req, res, next) => {
    res.send("Not implemented: Author update POST");
});