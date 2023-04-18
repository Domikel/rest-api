import {User} from '../app.js'

const displayAllUsers = async (req, res) => {
    try {
        const users = await User.find()
        res.status(200).json(users)
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err
        })
    }
}

export default displayAllUsers
