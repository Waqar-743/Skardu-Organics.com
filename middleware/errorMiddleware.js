/**
 * Middleware to handle routes that are not found (404).
 * This runs if no other route matches the request.
 */
const notFound = (req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`);
  res.status(404);
  next(error); // Pass the error to the next error-handling middleware
};

/**
 * General error handler middleware.
 * This catches any errors passed by `next(error)`.
 */
const errorHandler = (err, req, res, next) => {
  // Sometimes an error might come with a 200 status code, we want to default to 500 if that's the case.
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode);

  // Send a JSON response with the error message.
  // In development mode, also send the stack trace for debugging.
  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === 'production' ? null : err.stack,
  });
};

export { notFound, errorHandler };
