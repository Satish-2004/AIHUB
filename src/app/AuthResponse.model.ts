export interface AuthResponse {
  userId(userId: any): string;
  jwtToken: string;
}