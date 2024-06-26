import express from 'express';
import jwt from 'jsonwebtoken';
const router = express.Router();
router.get('/verify', async (req, res) => {
    try {
        let token = req.headers.token
        req.payload = jwt.verify(token, 'codeforindia');
        if (req.payload) {
            return res.json(req.payload)
        }
        // console.log(req.query.token)
    } catch (error) {
        return res.status(401).json({ error: 'Session Expired, please login' });
        // return console.log("Session expired")
    }

})
export default router;