const asyncHandler = require('express-async-handler')
const Company = require('../models/company.model')

const getCompanyByArea = asyncHandler(async (req, res) => {
    console.log(typeof(req.params.area))
    const companies = await Company.find({'area': req.params.area}).collation( { locale: 'en', strength: 1 } )
    res.json(companies)
})

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



module.exports = { createCompany, getCompanyByArea }