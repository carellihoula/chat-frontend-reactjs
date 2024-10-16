import {
  AuthResponse,
  LoginData,
  RegisterData,
} from "../types__interfaces/apiDataInterface";
import axiosInstance from "./axiosConfig";

export const login = async (data: LoginData): Promise<AuthResponse> => {
  const response = await axiosInstance.post<AuthResponse>("/auth/login", data);
  return response.data;
};

export const register = async (data: RegisterData): Promise<AuthResponse> => {
  const response = await axiosInstance.post<AuthResponse>(
    "/auth/register",
    data
  );
  return response.data;
};
