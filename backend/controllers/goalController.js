// @description Get goals
// @route       Get api/goals
// @access      Private
const getGoals = (req, res) => {
    res.status(200).json({ message: 'Get goals' })
}

// @description Set goals
// @route       Post api/goals
// @access      Private
const setGoals = (req, res) => {
    res.status(200).json({ message: 'Get goals' })
}

// @description Update goals
// @route       Put api/goals/:id
// @access      Private
const updateGoals = (req, res) => {
    res.status(200).json({ message: `Update goal ${req.params.id}` })
}

// @description Delete goals
// @route       Delete api/goals/:id
// @access      Private
const deleteGoals = (req, res) => {
    res.status(200).json({ message: `Update goal ${req.params.id}` })
}

module.exports = { getGoals, setGoals, updateGoals, deleteGoals }