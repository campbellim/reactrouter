const router = require("express").Router();
const bookRouter = require("./books");

// Book makes sure to use routes
router.use("/books", bookRouter);

module.exports = router;