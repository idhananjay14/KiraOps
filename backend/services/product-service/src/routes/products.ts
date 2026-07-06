import { Router } from "express";

const router = Router();

const products = [
  {
    id: 1,
    name: "Nike Shoes",
    price: 4999,
  },
  {
    id: 2,
    name: "iPhone 16",
    price: 89999,
  },
];

router.get("/", (req, res) => {
  res.json(products);
});

router.get("/:id", (req, res) => {
  const product = products.find(
    (product) => product.id === Number(req.params.id)
  );

  if (!product) {
    return res.status(404).json({
      message: "Product not found",
    });
  }

  res.json(product);
});

export default router;