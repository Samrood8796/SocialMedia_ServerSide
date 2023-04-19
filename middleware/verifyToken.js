import dotenv from 'dotenv'
dotenv.config()
import Jwt from 'jsonwebtoken';
const jwt_secret_key = process.env.jwt_secret_key

const verifyToken = (req, res, next) => {
    const authHeader = req.header("Authorization")
    if (authHeader) {
        const token = authHeader.split(" ")[1];
        Jwt.verify(token, jwt_secret_key, (err, user) => {
            if (err) { return res.status(403).json("Token is not valid") }
            req.user = user
            next();
        })
    } else {
        res.status(401).json("You Are Not Authenticated !!!")
    }
}
export { verifyToken }  