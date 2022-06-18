import express from 'express'
import mongoose from 'mongoose'
import User from '../models/User.js'
import {validateEmail, validateLength} from "../helpers/validation.js";


const router = express.Router()

export const createUser = async (req,res) => {
    try {
        const {
            first_name,
            last_name,
            email,
            password,
            userName,
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
        const check = await User.findOne(email)
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
                message: "email must be between 6 and 40 characters",
            })
        }
        try {
        const newUser = new User({
            first_name,
            last_name,
            email,
            password,
            userName,
            bYear,
            bMonth,
            bDay,
            gender,
        })
            await newUser.save()
            res.status(201).json(newUser)
        } catch (error) {
            res.status(500).json({message: error.message})
        }

export const getUsers = async (req, res) => {
    try {
        const user = await User.findById(id)
        res.status(200).json(user)
    } catch (error){
        res.status(500).json({message: error.message})
    }
}

export const getUser = async (req, res) => {
    const {id} = req.params;

    try {
        const user = await User.findById(id)
        res.status(200).json(user)
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}


export const updateUser = async (req, res) => {
    const {id} = req.params;
    const {params} = req.body;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No user with id: ${id}`)

    const updatedUser = { params, _id: id}
    await User.findByIdAndUpdate(id, updatedUser, {new: true})
    res.json(updatedUser)
}

export const deleteUser = async (req, res) => {
    const {id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No user with id: ${id}`)

    await User.findByIdAndRemove(id)

    res.json({message: "user deleted successfully"})
}


export default router

