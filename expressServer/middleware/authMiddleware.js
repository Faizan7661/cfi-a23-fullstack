function authMiddleware(req, res, next) {
    if (req.headers['auth-token'] == 'adnan') {
        req.payload = 'Adnan Ali Khan'
        return next();
    }
    return res.status(401).json({ error: 'Unauthorised Access' });
}

export default authMiddleware;