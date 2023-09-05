import mongoose from 'mongoose';
import bcrypt from 'bcrypt';


const UserSchema = new mongoose.Schema({
    firstName : {type: String, required: true},
    lastName : { type: String, required: true},
    email : {type: String, unique: true, required: true},
    password : {type: String, required: true},
    cart: [{type: mongoose.Types.ObjectId, ref: "cart"}],
    
    createdOn : { type: Date, default: Date.now }
},{
    timestamps: true
}
).pre('save', async function (next) {
    // check if the password has been modified
    if (!this.isModified('password')) {
        return next();
    }

    // Hash and salt the password
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);

    // calling the next middleware function
    next();
});

UserSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password.valueOf(), this.password);
};

export default mongoose.model("Userss", UserSchema);