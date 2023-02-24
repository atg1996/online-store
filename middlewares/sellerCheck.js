const jwt = require('jsonwebtoken');

function sellerChecker(req, res, next) {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        return res.status(401).json({ message: 'No token provided' });
    }

    const token = authHeader.split(' ')[1];
    jwt.verify(token, process.env.JWT_SECRET, (error, decodedToken) => {
        if (error) {
            return res.status(401).json({ message: 'Invalid token' });
        }
        if (decodedToken.role !== 'seller') {
            return res.status(403).json({ message: 'Forbidden' });
        }
        req.userId = decodedToken.userId;
        req.userRole = decodedToken.role;
        next();
    });
}

module.exports = {
    sellerChecker,
};
