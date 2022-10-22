const asyncHandler = require('express-async-handler')
const Journey = require('../models/journey.model')
const Route = require('../models/route.model')

const startJourney = asyncHandler(async (req, res) => {
    const route = await Route.find({'route': req.params.route})

    const {date, isStarted} = req.body

    if(route) {
        const journey = new Journey({
            user: req.user._id,
            date, 
            isStarted
        })

        const createdJourney = await journey.save()
        res.json(createdJourney)
    }
})

module.exports = {startJourney}