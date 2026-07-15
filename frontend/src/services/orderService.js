import api from "./api";

export async function createOrder(productId, productName, productImage, quantity, totalAmount) {
  const token = localStorage.getItem("token");
  
  const response = await api.post("/orders", {
    productId,
    productName,
    productImage,
    quantity,
    totalAmount,
  }, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

export async function getOrders() {
  const token = localStorage.getItem("token");
  const response = await api.get("/orders", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}

export async function getOrder(id) {
  const token = localStorage.getItem("token");
  const response = await api.get(`/orders/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}
