"use client";

import { useRouter } from "next/navigation";

import { loginUser, registerUser } from "@/services/auth.service";
import { saveToken } from "@/lib/auth";
import { useAuthStore } from "@/store/authStore";

export const useAuth = () => {
  const router = useRouter();

  const setToken = useAuthStore((state) => state.setToken);

  const login = async (email: string, password: string) => {
    const response = await loginUser({
      email,
      password,
    });

    saveToken(response.access_token);

    setToken(response.access_token);

    router.push("/dashboard");
  };

  const register = async (
    name: string,
    email: string,
    password: string
  ) => {
    const response = await registerUser({
      name,
      email,
      password,
    });

    saveToken(response.access_token);

    setToken(response.access_token);

    router.push("/dashboard");
  };

  return {
    login,
    register,
  };
};