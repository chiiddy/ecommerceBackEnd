import jwt from "jsonwebtoken";

const config = process.env.JWT_SECRETKEY;

const createProducts = async (req, res, next) => {
  const authHeader = req.headers["authorization"]?.split(" ");
  if (req.headers["authorization"]) {
    try {
      console.log(authHeader);
      if (authHeader[0] !== "Bearer") {
        return res.status(403).json({ message: "Login Required" });
      } else {
        jwt.verify(authHeader[1], config, (err) => {
          return next();
        });
      }
    } catch (e) {
      return res.status(401).json({ message: "User not authorized" });
    }
  } else {
    return res
      .status(401)
      .json({ message: "Not authorized, token not available" });
  }
};

export default createProducts;
