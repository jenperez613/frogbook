import express from 'express'
import mongoose from 'mongoose'
import User from '../models/User.js'
import {validateEmail, validateLength, validateUserName} from "../helpers/validation.js";
import bcrypt from 'bcryptjs';
import {generateToken} from "../helpers/tokens.js";
import {sendVerificationEmail} from "../helpers/mailer.js";
import jwt from "jsonwebtoken";


export const register = async (req,res) => {
        try {
                const {
                        first_name,
                        last_name,
                        username,
                        email,
                        password,
                        bYear,
                        bMonth,
                        bDay,
                        gender,
                } = req.body;

                if (!validateEmail(email)) {
                        return res.status(400).json({
                                message: "invalid email address"
                        })
                }

                const check = await User.findOne({email})
                if (check) {
                        return res.status(400).json({
                                message: "email address already exists"
                        })
                }

                if (!validateLength(first_name, 3, 30)) {
                        return res.status(400).json({
                                message: "first name must be between 2 and 30 characters",
                        })
                }

                if (!validateLength(last_name, 2, 30)) {
                        return res.status(400).json({
                                message: "last name must be between 2 and 30 characters",
                        })
                }
                if (!validateLength(password, 6, 40)) {
                        return res.status(400).json({
                                message: "password must be between 6 and 40 characters",
                        })
                }

const cryptedPassword = await bcrypt.hash(password,12)

                let tempUserName = first_name + last_name;
                let newUserName = await validateUserName(tempUserName)

                const user = await new User({
                        first_name,
                        last_name,
                        userName: newUserName,
                        email,
                        password: cryptedPassword,
                        bYear,
                        bMonth,
                        bDay,
                        gender,
                }).save()
                const emailVerificationToken = generateToken({id:user._id.toString()},
                    "30m")

                const url = `${process.env.BASE_URL}/activate/${emailVerificationToken}`

                sendVerificationEmail(user.email, user.first_name, url)

                const token = generateToken({id:user._id.toString()}, "7d")
                res.send({
                        id: user._id,
                        userName: user.userName,
                        picture: user.picture,
                        first_name: user.first_name,
                        last_name: user.last_name,
                        token: token,
                        verified: user.verified,
                        message: "Successfully registered! Click activation link in your email to start."
                })
        } catch (error) {
                res.status(500).json({message: error.message})
        }
}
export const activateAccount = async (req,res) => {
        try {
        const {token} = req.body
        const user = jwt.verify(token, process.env.TOKEN_SECRET)
       const check = await User.findById(user.id)
        if(check.verified === true){
                return res.status(400).json({message: "This email account is already activated!"})
        } else {
                await User.findByIdAndUpdate(user.id, {verified: true})
                return res.status(200).json({message: "Account has been successfully activated!"})
        }
        } catch (error) {
                res.status(500).json({message: error.message})
}
}
export const login = async (req, res) => {
        try {
                const {email, password} = req.body
                const user = await User.findOne({email})
                if (!user) {
                        return res.status(400)
                            .json({
                                    message: "The email address entered is not connected to an account."
                            })
                }
                const check = await bcrypt.compare(password, user.password)
                if (!check) {
                        return res.status(400).json({
                                message: "Invalid credentials."
                        })
                }
                const token = generateToken({id: user._id.toString()}, "7d")
                res.send({
                        id: user._id,
                        userName: user.userName,
                        picture: user.picture,
                        first_name: user.first_name,
                        last_name: user.last_name,
                        token: token,
                        verified: user.verified,
                        message: "Successfully registered! Click activation link in your email to start."
                })
        } catch (error) {
                res.status(500).json({message: error.message})
        }
}







