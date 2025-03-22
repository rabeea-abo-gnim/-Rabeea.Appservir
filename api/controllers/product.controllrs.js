const PRODUCT_MODULE =require("../moduls/product.modul");

const CreateProduct = async (req, res) => {
    try {
      const { name,price ,image,option } = req.body;
      const product = await PRODUCT_MODULE.create({ name, price ,image ,option});
      res.status(201).json({ message: "Product created successfully", product });
    } catch (error) {
      res.status(500).json({ message: "Error creating prodoct", error: error.message });
    }
  };

  const FindProduct = (req, res) => { 
    PRODUCT_MODULE.find({})
      .then((Product) => {
        if (Product) {
          res.status(200).json(Product);
        } else {
          res.status(404).json({ message: "Product not found" });
        }
      })
      .catch((e) => {
        res.status(500).json({ message: "Error finding Product" });
      });
  };

  module.exports = {
    CreateProduct,
    FindProduct,

  }