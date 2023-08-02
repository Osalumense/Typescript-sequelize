import helpers from "../utils/helpers"
import AuthService from "../services/AuthService"
import { 
    validateRegistration,
 } from "../middlewares/validation"
import { Request, Response, NextFunction } from "express"
import { log } from "console"


class AuthController {
    async registerUser (req: Request, res: Response): Promise<Object> {
        try {
            const error: any = validateRegistration.parse(req.body)
            const register: any = await AuthService.registerUser(req.body)
            return res.status(register.code).send(register)
        } catch (error: any) {
            if(error.issues) {
                const errorMessage = error.issues.map((issue: any) => ({
                    message: `${issue.path.join('.')} is ${issue.message}`,
                }))
                return res.status(400).json({ error: errorMessage[0] })
            }
            return res.status(500).send({ error: error})
        }
    }
}

export default new AuthController()