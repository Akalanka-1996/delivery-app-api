const asyncHandler = require('express-async-handler')
const Lane = require('../models/lane.model')
const Route = require('../models/route.model')


const getLanes = asyncHandler(async (req, res) => {
    const lanes = await Lane.find()
    res.json(lanes)
})

const createLane = asyncHandler(async (req, res) => {
    const { lane, estimatedTime, routeId, hour, min} = req.body

    if (!lane) {
        res.status(400)
        throw new Error("Please fill all the fields")
    } else {
        const routeLane = new Lane({
            user: req.user._id,
            lane,
            // estimatedTime,
            hour,
            min,
            routeId,
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

const deleteLane = asyncHandler(async (req, res) => {
    const lane = await Lane.findById(req.params.id)
    console.log(lane)

    if (lane.user.toString() !== req.user._id.toString()) {
        throw new Error("You cannot perform this action!")
    }

    if(lane) {
        await lane.remove()
        res.json({message: "Lane removed!"})
    } else {
        res.status(404)
        throw new Error("Lane not found")
    }
})


module.exports = { createLane, deleteLane, getLanes }