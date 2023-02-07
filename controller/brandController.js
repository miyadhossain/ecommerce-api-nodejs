const Brand = require("../models/brandModel");
const asyncHandler = require("express-async-handler");
const validateMongoDbId = require("../utils/validateMongodbId");

// Create brand
const createBrand = asyncHandler(async (req, res) => {
  try {
    const newBrand = await Brand.create(req.body);
    res.json(newBrand);
  } catch (error) {
    throw new Error(error);
  }
});

// Update brand
const updateBrand = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const update_brand = await Brand.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json(update_brand);
  } catch (error) {
    throw new Error(error);
  }
});

// Delete brand
const deleteBrand = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const delete_brand = await Brand.findByIdAndDelete(id);
    res.json(delete_brand);
  } catch (error) {
    throw new Error(error);
  }
});

// Get single brand
const getSingleBrand = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const single_brand = await Brand.findById(id);
    res.json(single_brand);
  } catch (error) {
    throw new Error(error);
  }
});

// Get all brands
const getAllBrands = asyncHandler(async (req, res) => {
  try {
    const allBrands = await Brand.find();
    res.json(allBrands);
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = {
  createBrand,
  updateBrand,
  deleteBrand,
  getSingleBrand,
  getAllBrands,
};
