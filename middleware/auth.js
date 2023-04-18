import jtw from "jsonwebtoken"
import {User} from '../app.js'
const auth = async (req, res, next) => {
    try {
        const token = req.headers.auth;
        const decoded = jtw.verify(token, process.env.JWT_SECRET);
        const user = await User.findById(decoded.id)
        if (!user) {
            throw new Error();
        }
        req.user = user;

        next();
    } catch (error) {
        res.status(401).send({ error: "Please authenticate" });
    }
}

export default auth;