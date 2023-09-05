import Userss from "../../models/Userss.js";


const createUsers = async (req, res) => {
    try {

        const checkUser = await Userss.findOne({ email: req.body.email });
        if (checkUser) {
            return res.status(400).json({ error: "User already exists" });
        }
        const user = new Userss(req.body);
        user.save();
        console.log(user);
        return res.status(201).json({ user });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

export default createUsers;