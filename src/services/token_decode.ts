import jwt_decode from "jwt-decode";

export const getTokenDecode = (token: any): any => {
  return jwt_decode(token);
};
