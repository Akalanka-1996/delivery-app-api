const asyncHandler = require('express-async-handler')
const Lane = require('../models/lane.model')
const Route = require('../models/route.model')

const createLane = asyncHandler(async (req, res) => {
    const { lane, estimatedTime} = req.body

    if (!lane || !estimatedTime) {
        res.status(400)
        throw new Error("Please fill all the fields")
    } else {
        const lane = new Lane({
            user: req.user._id,
            lane,
            estimatedTime
        })

        const createdLane = await lane.save()
        .then((result) => {
            Route.findById((routeId), (err, route) => {
                if(route) {
                    route.lanes.push(lane)
                    route.save()
                    res.json({message:"Lane created"})
                }
            })
        
        })
        .catch((error) => {
            res.status(500).json({error})
        })

        res.status(201).json(createdLane)
    }
})



module.exports = { createLane }