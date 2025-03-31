import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || "your_secret_key";

const authMiddleware = (req, res, next) => {
    const token = req.header("Authorization");

    if (!token) {
        return res.status(401).json({ message: "Access denied. No token provided." });
    }

    try {
        const decoded = jwt.verify(token.replace("Bearer ", ""), JWT_SECRET);
        req.supplier = decoded; // Lưu thông tin vào `req`
        next();
    } catch (error) {
        res.status(401).json({ message: "Invalid token." });
    }
};

export default authMiddleware;
