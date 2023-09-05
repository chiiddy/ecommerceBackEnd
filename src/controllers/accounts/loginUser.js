// import Userss from '../../models/Userss.js';
import Userss from '../../models/Userss.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';


const loginUser = async (req, res) => {
        const { email, password } = req.body;
        if (!email || !password) {
        return res.status(400).json ({message: "email or password not provided"});
    }
    try {
        const user = await Userss.findOne({ email });
        if(!user) {
            res.status(400).json({ message: "Login not successful", error: "User not found "});
        } else {
            bcrypt.compare(password, user.password).then(function (result) {
                if (result) {
                    const maxAge = 3 * 60 * 60;
                    const token = jwt.sign(
                        { id: user._id, email },
                        process.env.JWT_SECRETKEY,
                        { expiresIn: maxAge}
                    );
                    res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge * 1000 });
                    res.status(201).json({ message: "Login successful", user, token });
                } else {
                    res.status(400).json({ message: "invalid credentials"});
                }
            })
        }
    } catch (err) {
        res.status(400).json({ message: "An error occurred", error: err.message});
    }
}
export default loginUser;