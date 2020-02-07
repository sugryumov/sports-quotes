const Category = require('../models/Category');

const getAll = async (request, h) => {
  try {
    const categories = await Category.find();

    return h.response(categories);
  } catch (err) {
    return h.response(err).code(500);
  }
};

const create = async (request, h) => {
  try {
    const candidate = await Category.findOne({ name: request.payload.name });

    if (candidate) {
      return h.response('Такая категория существует').code(409);
    } else {
      const category = new Category(request.payload);
      const result = await category.save();

      return h.response(result);
    }
  } catch (err) {
    return h.response(err).code(500);
  }
};

const remove = async (request, h) => {
  try {
    const deleteCategory = await Category.findByIdAndDelete(
      request.params.categoryId
    );

    return h.response(deleteCategory);
  } catch (err) {
    return h.response(err).code(500);
  }
};

const update = async (request, h) => {
  try {
    const candidate = await Category.findOne({ name: request.payload.name });

    if (candidate) {
      return h.response('Такая категория уже существует').code(409);
    } else {
      const updateCategory = await Category.findByIdAndUpdate(
        request.params.categoryId,
        request.payload,
        { new: true }
      );

      return h.response(updateCategory);
    }
  } catch (err) {
    return h.response(err).code(500);
  }
};

module.exports = {
  getAll,
  create,
  remove,
  update
};
