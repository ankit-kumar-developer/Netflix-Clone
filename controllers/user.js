import { User } from "../models/userModel.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

export const Login = async (req, resp) => {

    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return resp.status(401).json({
                message: "Invalid Data",
                success: false
            })
        }
        const user = await User.findOne({ email })

        if (!user) {
            return resp.status(401).json({
                message: "You are not register! Please Create a account",
                success: false
            })
        }

        const isMatch = await bcryptjs.compare(password, user.password)

        if (!isMatch) {
            return resp.status(401).json({
                message: "Invalid email or password",
                success: false
            })
        }

        const tokenData = {
            id: user._id
        }

        const token = await jwt.sign(tokenData, "aksdfvkerjkvsdfswer", { expiresIn: "2d" });

        return resp.status(200).cookie("token", token, { httpOnly: true }).json({
            message: `Welcome back ${user.name}`,
            user,
            success: true
        })

    } catch (error) {
        console.log(error)
    }

}


export const Register = async (req, resp) => {
    try {
        const { name, email, password } = req.body;
        if (!name || !email || !password) {
            return resp.status(401).json({
                message: "Invalid Data",
                success: false
            })
        }

        const user = await User.findOne({ email });

        if (user) {
            return resp.status(401).json({
                message: "This email is already used",
                success: false
            })
        }

        const hashedPassword = await bcryptjs.hash(password, 16);

        await User.create({
            name,
            email,
            password: hashedPassword
        })

        return resp.status(201).json({
            message: "Account Created Sucessfully",
            success: true
        })

    } catch (error) {
        console.log(error);
    }
}

export const Logout = async (req, resp) => {
    return resp.status(200).cookie("token", "", { expiresIn: new Date(Date.now()), httpOnly: true }).json({
        message: "User logged out successfully",
        success: true
    })
}