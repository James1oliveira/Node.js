// Import required modules
const httpStatus = require("http-status-codes"); // Provides standard HTTP status codes
const path = require("path"); // Helps work with file and directory paths

// Middleware to log errors
exports.logErrors = (error, req, res, next) => {
    console.error(error.stack); // Log the full error stack to the console for debugging
    next(error); // Pass the error to the next error-handling middleware
};

// Middleware to handle 404 (Not Found) errors
exports.respondNoResourceFound = (req, res) => {
    let errorCode = httpStatus.StatusCodes.NOT_FOUND; // Set HTTP status code to 404
    res.status(errorCode); // Send the 404 status code
    // Send a custom 404 HTML page from the public folder
    res.sendFile(path.join(__dirname, "../public/404.html"));
};

// Middleware to handle 500 (Internal Server Error)
exports.respondInternalError = (error, req, res, next) => {
    let errorCode = httpStatus.StatusCodes.INTERNAL_SERVER_ERROR; // Set HTTP status code to 500
    console.log(`ERROR occurred: ${error.stack}`); // Log the error stack for debugging
    res.status(errorCode); // Send the 500 status code
    res.send(`${errorCode} | Sorry, our application is experiencing a problem!`); // User-friendly error message
};
