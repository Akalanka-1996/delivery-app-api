const asyncHandler = require('express-async-handler')
const Route = require('../models/route.model')

const createRoute = asyncHandler(async (req, res) => {
    const {area, startPoint, startTime } = req.body

    if (!area || !startPoint) {
        res.status(400)
        throw new Error("Please fill all the fields")
    } else {
        const route = new Route({
            user: req.user._id,
            area,
            startPoint,
            startTime
        })

        const createdRoute = await route.save()

        res.status(201).json(createdRoute)
    }
})



module.exports = { createRoute }