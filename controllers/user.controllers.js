const express = require('express')
const User = require('../models/user.models')

module.exports = {
    addUsers: async (req, res, next) => {
        try {
            const user = new User (req.body)
            await user.save()

            res.status(201).json({
                status: true,
                message: "Create user successfully",
                data: user
            })
        } catch (error) {
            next(error)
        }
    },
    findAllusers: async (req, res, next) => {
        try {
            const users = await User.find({})

            res.status(200).json({
                status: true,
                message: "All users founded",
                data: users
            })
        } catch (error) {
            next(error)
        }
    }
}