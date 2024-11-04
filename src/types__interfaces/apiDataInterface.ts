// Interfaces for login and registration data
export interface LoginData {
  email: string;
  password: string;
}

export interface RegisterData {
  username: string;
  email: string;
  password: string;
}

export interface EditPasswordData {
  currentPassword: string;
  newPassword: string;
}

// Interface for API response
export interface AuthResponse {
  token: string;
  user: {
    _id: string;
    username: string;
    email: string;
    avatar: string;
    status: boolean;
  };
}
