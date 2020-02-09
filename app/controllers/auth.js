const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const { JWT, JWT_REFRESH } = process.env;

const registration = async (request, h) => {
  try {
    const candidate = await User.findOne({ email: request.payload.email });

    if (candidate) {
      return h.response('Пользователь с таким email существует').code(409);
    } else {
      const salt = bcrypt.genSaltSync(10);
      const password = request.payload.password;

      const user = new User({
        email: request.payload.email,
        password: bcrypt.hashSync(password, salt)
      });

      const result = await user.save();
      return h.response(result);
    }
  } catch (err) {
    return h.response(err).code(500);
  }
};

const login = async (request, h) => {
  try {
    const candidate = await User.findOne({ email: request.payload.email });
    const tokenExpirationSeconds = 60 * 60;
    const refreshTokenExpirationSecond = 60 * 60;

    if (candidate) {
      const passwordResult = bcrypt.compareSync(
        request.payload.password,
        candidate.password
      );

      if (passwordResult) {
        const token = jwt.sign(
          {
            email: candidate.email,
            userId: candidate._id
          },
          JWT,
          {
            expiresIn: tokenExpirationSeconds
          }
        );

        const refreshToken = jwt.sign(
          {
            userId: candidate._id,
            refresh: true
          },
          JWT_REFRESH,
          {
            expiresIn: Math.floor(
              tokenExpirationSeconds + refreshTokenExpirationSecond
            )
          }
        );

        return h.response({ token: `Bearer ${token}`, refreshToken });
      } else {
        return h.response('Неверный пароль').code(401);
      }
    } else {
      return h.response('Пользователь с таким email не найден').code(404);
    }
  } catch (err) {
    return h.response(err).code(500);
  }
};

const getAll = async (request, h) => {
  try {
    const users = await User.find();
    const result = users.map((user) => {
      return {
        email: user.email,
        _id: user._id
      };
    });

    return h.response(result);
  } catch (err) {
    return h.response(err).code(500);
  }
};

const remove = async (request, h) => {
  try {
    const deleteUser = await User.findByIdAndDelete(request.params.userId);

    return h.response(deleteUser);
  } catch (err) {
    return h.response(err).code(500);
  }
};

module.exports = { registration, login, getAll, remove };
