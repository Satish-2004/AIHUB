export interface AuthResponse {
  userName(userName: any): string;
  userId(userId: any): string;
  jwtToken: string;
}