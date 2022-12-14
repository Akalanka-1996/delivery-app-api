const asyncHandler = require('express-async-handler')
const Route = require('../models/route.model')

const createRoute = asyncHandler(async (req, res) => {
    const {title, startPoint, startTime, company } = req.body

    if (!title || !startPoint) {
        res.status(400)
        throw new Error("Please fill all the fields")
    } else {
        const route = new Route({
            user: req.user._id,
            title,
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

const followRoute = asyncHandler(async (req, res) => {
    const route = await Route.findById(req.params.id)

    const {user} = req.body

    if (route) {
        route.followers.push(user)
        const updatedRoute = await route.save()
        res.json(updatedRoute)
    } else {
        res.status(404)
        throw new Error('Route not found!')
    }
    

})

const getFollowersCount = asyncHandler(async (req, res) => {
    const route = await Route.findById(req.params.id)

    let followCount = 0;

    if (route) {
        followCount = await route.followers.length
        console.log(followCount)
        res.json(followCount)


    } else {
        res.status(404)
        throw new Error('Route not found!')
    }

    // return route
})

const getFollowers = asyncHandler(async (req, res) => {

    const route = await Route.findById(req.params.id)

    if (route) {
        res.json(route.followers)


    } else {
        res.status(404)
        throw new Error('Route not found!')
    }
})

const endJourney = asyncHandler(async (req, res) => {
    const route = await Route.findById(req.params.id)


    if (route) {
        route.isStarted = false

    const updatedRoute = await route.save()
    res.json(updatedRoute)
    } else {
        res.status(404);
        throw new Error("Route not found");
    }
})



module.exports = { createRoute, getCompanyRoute, getRouteWithPopulate, startJourney, getRouteById, followRoute, getFollowersCount, getFollowers, endJourney }