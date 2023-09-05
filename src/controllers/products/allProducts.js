import createProducts from '../../models/createProducts.js'


const allProductss = async (req, res) => {
  try {
    const products = await createProducts.find();
    res.status(201).json({ message: "product listed successfully", products });
  } catch (err) {
    res
      .status(400)
      .json({
        message: "No product to display",
        error: err.message,
      });
  }
};

export default allProductss;
