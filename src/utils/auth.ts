import { jwtDecode } from "jwt-decode";

interface DecodedToken {
  id: string;
}

/**
 * Extrait le userId d'un token JWT.
 * @param token Le token JWT.
 * @returns Le userId si présent, sinon null.
 */
export const getUserIdFromToken = (token: string): string | null => {
  try {
    const decoded = jwtDecode<DecodedToken>(token);
    return decoded.id || null; // Ajustez en fonction de votre structure de token
  } catch (error) {
    console.error("Erreur lors du décodage du token:", error);
    return null;
  }
};
