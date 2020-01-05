import { User } from "../resources/user/user.mode";
import jwt from "jsonwebtoken";
import envConfig from "../config";



export const signup = async (req, res) => {
    if(!req.body.email || !req.body.password) {
        res.status(400).send({message: 'need email and password'});
    }
    try {
        const user = await User.create(req.body);
        const token = newToken(user);
        return res.status(200).send({token});
    } catch(e) {
        return res.status(500).send({messge:e.message});
    }
}

export const newToken = user => {
    return jwt.sign({id:user.id}, envConfig.jwt, {expiresIn:"3d"} );
}

export const signin = async (req, res) => {
    if(!req.body.email || ! req.body.password)
        return res.status(400).send({'message': 'Please provide email and password'});
    try {
        console.log(req.body.password);
        const user = await  User.findOne({email:req.body.email})
                                .select('email password')
                                .exec();
        if(!user) {
            return res.status(400).send({'message': 'invalid email or password'});
        }
        const match = await user.checkPassword(req.body.password);
        if(!match) 
            return res.status(400).send({'message': 'invalid email or password'});
        
        const token = newToken(user);
        return res.status(200).send({token});
    } catch(e) {
        console.error(e)
        res.status(500).end()
    }
}

export const protect = async (req, res, next) => {
    const bearer = req.headers.authorization;
    console.log('1');
    if (!bearer || !bearer.startsWith('Bearer ')) {
        return res.status(401).end()
      }
    
    const token = bearer.split('Bearer ')[1].trim()
    let payload
    console.log('2');
    try {
    payload = await verifyToken(token)
    } catch (e) {
    return res.status(401).end()
    }
    console.log(payload);
    const user = await User.findById(payload.id)
    .select('-password')
    .lean()
    .exec()
    
    if (!user) {
    return res.status(401).end()
    }

    req.user = user
    console.log('4');
    next()
}

export const verifyToken = token =>
  new Promise((resolve, reject) => {
    jwt.verify(token, envConfig.jwt, (err, payload) => {
      if (err) return reject(err)
      resolve(payload)
    })
  })