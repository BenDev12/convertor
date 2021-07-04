
import jwt from 'jsonwebtoken';
import config from "../config";

const auths = async (req, res, next) => {
    const authHeader = req.get('Authorization');
    
    if (!authHeader) {
        req.isAuth =false
        return next()
    };
        const token = req.get('Authorization').split(' ')[1];
        if (!token || token == null){
            req.isAuth = false;
            return next();
        }   
        try {
        const user = await jwt.verify(token, config.jwtSecret);
        if (!user){
             req.isAuth = false;
             return next();
        }

        req.isAuth = true;  
        req.userId = user;
        // console.log(user)
        return next();
    } catch (error) {
        console.log(error);
        return next();
    }

};
export default auths;