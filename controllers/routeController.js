const asyncHandler = require('express-async-handler')
const Route = require('../models/route.model')

const createRoute = asyncHandler(async (req, res) => {
    const {area, startPoint, startTime, company } = req.body

    if (!area || !startPoint) {
        res.status(400)
        throw new Error("Please fill all the fields")
    } else {
        const route = new Route({
            user: req.user._id,
            area,
            startPoint,
            startTime,
            company
        })

        const createdRoute = await route.save()

        res.status(201).json(createdRoute)
    }
})

const getCompanyRoute = asyncHandler(async (req, res) => {
    const route = await Route.find({'company': req.params.company})
    if(route){
        res.json(route)
    } else {
        res.status(404)
        throw new Error("Route not found")
    }

})

const getRouteWithPopulate = asyncHandler(async (req, res) => {
    const routes = await Route.find({'company': req.params.company}).populate('lanes')
    if(routes) {
        res.json(routes)
    } else {
        res.status(404)
        throw new Error("Not found")
    }
})

const startJourney = asyncHandler(async (req, res) => {
    const route = await Route.findById(req.params.id)

    const {vehilceType, vehicleNumber} = req.body

    console.log(route)

    if (route) {
        route.vehilceType = vehilceType
        route.vehicleNumber = vehicleNumber
        route.isStarted = true

    const updatedRoute = await route.save()
    console.log(updatedRoute)
    res.json(updatedRoute)
    } else {
        res.status(404);
        throw new Error("Route not found");
    }
})

const getRouteById = asyncHandler( async (req, res) => {
    const route = await Route.findById(req.params.id)

    if (route) {
        res.json(route)
    } else {
        res.status(404)
        throw new Error('Route not found!')
    }
})



module.exports = { createRoute, getCompanyRoute, getRouteWithPopulate, startJourney, getRouteById }