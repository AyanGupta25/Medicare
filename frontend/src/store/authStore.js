import { create } from "zustand";

const useAuthStore = create((set) => ({
  user: localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null,
  token: localStorage.getItem("token") || null,
  role: localStorage.getItem("role") || null,

  login: (user, token, role) => {
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("token", token);
    localStorage.setItem("role", role);
    set({ user, token, role });
  },

  logout: () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    set({ user: null, token: null, role: null });
  },
}));

export default useAuthStore;