import { create } from "zustand";

interface AuthStore {
  token: string | null;
  user: any;
  setToken: (token: string) => void;
  setUser: (user: any) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthStore>((set) => ({
  token: null,
  user: null,

  setToken: (token) => set({ token }),

  setUser: (user) => set({ user }),

  logout: () => {
    localStorage.removeItem("token");

    set({
      token: null,
      user: null,
    });
  },
}));