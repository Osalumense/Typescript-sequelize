import jwt, { Secret } from "jsonwebtoken";
import AppConfig from "../config/AppConfig";
import { UserAttributes } from "../models/User";

const successResponse = (code: Number, data: any, message: string) => {
  return {
    status: "success",
    code: code || 200,
    data: data,
    message: message,
  };
};

const errorResponse = (code: Number, data: any, message: string) => {
  return {
    status: "error",
    code: code || 500,
    data: data,
    message: message,
  };
};

const createToken = (length: number) => {
  const characters = "0123456789abcdefghijklmnopqrstuvwxyz";
  let token = "";
  for (let i = 1; i <= length; i++) {
    token += characters[Math.floor(Math.random() * characters.length)];
  }
  return token;
};

const createOtp = (length: number) => {
  const characters = "0123456789";
  let token = "";
  for (let i = 1; i <= length; i++) {
    token += characters[Math.floor(Math.random() * characters.length)];
  }
  return token;
};

const generateAccessToken = (user: UserAttributes): string => {
  const expiresIn = 60 * 60 * 24 
  const payload = {
    id: user.id,
    email: user.email,
    // role: user.roleId,
    user: `${user.firstName} ${user.lastName}`,
    exp: Math.floor(Date.now() / 1000) + expiresIn,
  }
  const accessToken = jwt.sign(payload, AppConfig.SECRET_KEY as Secret);
  return accessToken;
};

export default {
  successResponse,
  errorResponse,
  createToken,
  generateAccessToken,
  createOtp
};
