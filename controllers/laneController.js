const asyncHandler = require('express-async-handler')
const Lane = require('../models/lane.model')
const Route = require('../models/route.model')

const createLane = asyncHandler(async (req, res) => {
    const { lane, estimatedTime, routeId} = req.body

    if (!lane || !estimatedTime) {
        res.status(400)
        throw new Error("Please fill all the fields")
    } else {
        const routeLane = new Lane({
            user: req.user._id,
            lane,
            estimatedTime,
            routeId
        })

        const createdLane = await routeLane.save()
        .then((result) => {
            Route.findById((routeId), (err, route) => {
                if(route) {
                    route.lanes.push(routeLane)
                    route.save()
                    res.json({message:"Lane created"})
                }
            })
        
        })
        .catch((error) => {
            res.status(500).json({error})
        })
    }
})



module.exports = { createLane }