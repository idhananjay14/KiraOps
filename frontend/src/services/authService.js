import api from "./api";

export async function register(name, email, password) {
  const response = await api.post("/auth/register", {
    name,
    email,
    password,
  });

  return response.data;
}

export async function login(email, password) {
  const response = await api.post("/auth/login", {
    email,
    password,
  });

  const { token } = response.data;

  if (token) {
    localStorage.setItem("token", token);
  }

  return response.data;
}

export function logout() {
  localStorage.removeItem("token");
}

export function isAuthenticated() {
  return !!localStorage.getItem("token");
}
