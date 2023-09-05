import mongoose from 'mongoose';


const AdminSchema = new mongoose.Schema ({
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    
    products: [{type: mongoose.Types.ObjectId, ref: "createProducts"}],
})
export default mongoose.model("admin", AdminSchema);