import api from "./api";

export async function getProducts() {
  const response = await api.get("/products");

  return response.data.map((product) => ({
    id: product.id,
    name: product.name,
    description: product.description,
    price: Number(product.price),
    image_url: product.image_url,
    category: product.category,
  }));
}

export async function getProduct(id) {
  const response = await api.get(`/products/${id}`);

  return {
    id: response.data.id,
    name: response.data.name,
    description: response.data.description,
    price: Number(response.data.price),
    image: response.data.image_url,
    category: response.data.category,
  };
}