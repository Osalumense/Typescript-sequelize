import helpers from "../utils/helpers";
import jwt, { Secret } from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { UserInput } from "../types/User"
import { UserInstance } from "../models/User"
import { User } from "../models"


interface IAuthService {
  registerUser(payload: UserInput): Promise<Object>;
  createUser(payload: UserInput): Promise<UserInstance>;
}

class AuthService implements IAuthService {
  async registerUser(payload: UserInput): Promise<Object> {
    try {
      const { email } = payload
      const checkIfEmailExists = await User.findOne({ where: {email: email}})
      if (checkIfEmailExists) throw new Error("Email already exists")
      const user = await this.createUser(payload)
      return helpers.successResponse(201, user.email, "User created successfully")
    } catch (error: any) {
      return helpers.errorResponse(500, error, error.message)
    }
  }

  async createUser(payload: UserInput): Promise<UserInstance> {
    const { email, password, phoneNumber, firstName, lastName, status } = payload
    const tokenExpire = new Date(Date.now() + 900000);
    const verifyToken = helpers.createToken(32);
    let userPassword = ''
    if(typeof password === 'string') {
      userPassword = bcrypt.hashSync(password, 8)
    } 
    const user = await User.create({
      email: email.toLowerCase(),
      phoneNumber: phoneNumber,
      password: userPassword,
      firstName: firstName,
      lastName: lastName,
      token: verifyToken,
      status: status || "active",
      tokenExpire: tokenExpire
    });
    return user;
  }  
}

export default new AuthService();
