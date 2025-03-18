const jwt = require('jsonwebtoken');
require('dotenv').config();

function authenticateToken(req:any, res:any, next:any) {
    const token = req.headers['authorization'] && req.headers['authorization'].split(' ')[1];
    if (!token) return res.status(401).json({ message: 'Access Denied: No Token Provided' });

    jwt.verify(token, process.env.JWT_SECRET, (err:any, user:any) => {
        if (err) return res.status(403).json({ message: 'Invalid Token' });
        req.user = user; // Attach the user payload to the request object
        next();
    });
}

function authorizeRoles(roles: any){
    return (req:any, res:any, next:any) => {
        if (!roles.includes(req.user.role)) {
            return res.status(403).json({ message: 'Access Forbidden: Insufficient Permissions' });
        }
        next();
    };
}

export  { authenticateToken, authorizeRoles };
