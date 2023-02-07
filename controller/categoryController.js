const Category = require("../models/categoryModel");
const asyncHandler = require("express-async-handler");
const validateMongoDbId = require("../utils/validateMongodbId");

// Create category
const createCategory = asyncHandler(async (req, res) => {
  try {
    const newCategory = await Category.create(req.body);
    res.json(newCategory);
  } catch (error) {
    throw new Error(error);
  }
});

// Update category
const updateCategory = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const update_category = await Category.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json(update_category);
  } catch (error) {
    throw new Error(error);
  }
});

// Delete category
const deleteCategory = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const delete_category = await Category.findByIdAndDelete(id);
    res.json(delete_category);
  } catch (error) {
    throw new Error(error);
  }
});

// Get single category
const getSingleCategory = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const single_category = await Category.findById(id);
    res.json(single_category);
  } catch (error) {
    throw new Error(error);
  }
});

// Get all category
const getAllCategories = asyncHandler(async (req, res) => {
  try {
    const allCategories = await Category.find();
    res.json(allCategories);
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = {
  createCategory,
  updateCategory,
  deleteCategory,
  getSingleCategory,
  getAllCategories,
};
