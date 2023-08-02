import jwt, { Secret } from "jsonwebtoken";
import config from "../config/AppConfig";
import { Request, Response, NextFunction } from "express";

type CustomRequest = Request & {
  email?: string;
  id?: string;
  role?: string;
  user?: string;
};

const verifyToken = async (
  req: CustomRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const authorization = req.header("authorization");
  if (!authorization) {
    res.status(401).json({ success: false, message: "Access token not provided" });
    return;
  }
  const token = authorization.split(" ")[1];
  if (!token) {
    res.status(401).json({ success: false, message: "Access Denied" });
    return;
  }
  try {
    let decoded: any;
    if (config.SECRET_KEY) {
      decoded = jwt.verify(token, config.SECRET_KEY as Secret);
    } else {
      throw new Error("Missing SECRET_KEY");
    }
    req.email = decoded.email;
    req.id = decoded.id;
    req.role = decoded.role;
    req.user = decoded.user;
    next();
  } catch (error) {
    res.status(401).send({ success: false, message: "Unauthorized" });
    return;
  }
};

export { verifyToken };
