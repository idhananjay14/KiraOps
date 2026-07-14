import api from "./api";

export async function getProfile() {
  const response = await api.get("/users/profile");
  return response.data;
}

export async function updateProfile(phone, address) {
  const response = await api.put("/users/profile", {
    phone,
    address,
  });

  return response.data;
}
