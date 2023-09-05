import mongoose from 'mongoose';


const productSchema = new mongoose.Schema ({
    posterUrl: {type: String, required: true},
    name: {type: String, required: true},
    description: {type: String, required: true},
    price: {type: String, required: true },
    quantity: { type: String },
    // files: [{ file: {type: String, required: true}, fileType: {type: String, required: true} }],
    admin: {type: mongoose.Types.ObjectId, ref: "admin"},
    // user: [{ type: mongoose.Schema.Types.ObjectId, ref: "admin"}],
    createdOn: { type: Date, default: Date.now }
},{
    timestamps: true
})

export default mongoose.model("createProducts", productSchema);