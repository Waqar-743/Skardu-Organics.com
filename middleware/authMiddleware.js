import jwt from 'jsonwebtoken';
import User from '../models/userModel.js';

/**
 * Middleware to protect routes that require authentication.
 * It verifies the JWT from the Authorization header.
 */
const protect = async (req, res, next) => {
  let token;

  // Check if the Authorization header exists and starts with 'Bearer'
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
      // Extract the token from the header (Bearer TOKEN)
      token = req.headers.authorization.split(' ')[1];

      // Verify the token using the secret key
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // Find the user by the ID from the decoded token and attach it to the request object.
      // We exclude the password field for security.
      req.user = await User.findById(decoded.id).select('-password');
      
      if (!req.user) {
        res.status(401);
        throw new Error('Not authorized, user not found');
      }

      next(); // Proceed to the next middleware or route handler
    } catch (error) {
      console.error(error);
      res.status(401);
      throw new Error('Not authorized, token failed');
    }
  }

  if (!token) {
    res.status(401);
    throw new Error('Not authorized, no token');
  }
};

/**
 * Middleware to restrict access to admin users only.
 * This should be used after the `protect` middleware.
 */
const admin = (req, res, next) => {
  // Check if the user object exists on the request and if their role is 'admin'
  if (req.user && req.user.isAdmin) {
    next(); // User is an admin, proceed
  } else {
    res.status(403); // Use 403 Forbidden for insufficient permissions
    throw new Error('Not authorized as an admin');
  }
};

export { protect, admin };
