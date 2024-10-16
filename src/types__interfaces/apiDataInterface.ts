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

// Interface for API response
export interface AuthResponse {
  token: string;
  user: {
    id: string;
    username: string;
    email: string;
    avatar: string;
    status: boolean;
  };
}
