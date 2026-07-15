import api from "./api";

export async function getProfile() {
  const token = localStorage.getItem("token");
  const response = await api.get("/auth/profile", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}
