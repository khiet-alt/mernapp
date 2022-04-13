const asyncHandler = require('express-async-handler')

// @description Get goals
// @route       Get api/goals
// @access      Private
const getGoals = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'Get goals' })
})

// @description Set goals
// @route       Post api/goals
// @access      Private
const setGoals = asyncHandler(async (req, res) => {
    if (!req.body.text){
        res.status(400)
        throw new Error("Please add a text field")
    }
    res.status(200).json({ message: 'Get goals' })
})

// @description Update goals
// @route       Put api/goals/:id
// @access      Private
const updateGoals = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `Update goal ${req.params.id}` })
})

// @description Delete goals
// @route       Delete api/goals/:id
// @access      Private
const deleteGoals = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `Update goal ${req.params.id}` })
})

module.exports = { getGoals, setGoals, updateGoals, deleteGoals }