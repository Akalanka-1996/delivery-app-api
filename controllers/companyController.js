const asyncHandler = require('express-async-handler')
const Company = require('../models/company.model')

// const getTasks = asyncHandler(async (req, res) => {
//     const tasks = await Task.find()
//     res.json(tasks)
// })


// const getTaskById = asyncHandler(async (req, res) => {
//     const task = await Task.findById(req.params.id)

//     if (task) {
//         res.json(task)
//     } else {
//         res.status(400).json({message:"Task not found"})
//     }
// })

// create a company

const createCompany = asyncHandler(async (req, res) => {
    const {title, description, category, area} = req.body

    if (!description || !area) {
        res.status(400)
        throw new Error("Please fill all the fields")
    } else {
        const company = new Company({
            user: req.user._id,
            title,
            description,
            category,
            area
        })

        const createdCompany = await company.save()

        res.status(201).json(createdCompany)
    }
})



module.exports = { createCompany}