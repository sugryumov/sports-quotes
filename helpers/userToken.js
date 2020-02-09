const jwt = require('jsonwebtoken');
const User = require('../app/models/User');
const { JWT } = process.env;

const tokenStrategy = async (request, token) => {
  try {
    const userId = jwt.verify(token, JWT, (err, decoded) => {
      if (err || !decoded) throw err.message;

      return decoded.userId;
    });

    if (!userId) {
      return {
        isValid: false,
        credentials: {}
      };
    } else {
      const candidate = await User.findOne({ _id: userId });

      return {
        isValid: true,
        credentials: candidate
      };
    }
  } catch (err) {
    return {
      isValid: false,
      credentials: {}
    };
  }
};

module.exports = tokenStrategy;
