import mongoose from 'mongoose';


const cartSchema = new mongoose.schema ({
   order: { type: mongoose.Schema.Types.ObjectId, ref: "Userss"},
   comment: { type: mongoose.Schema.Types.ObjectId, ref: "Userss"},
   payment: { type: mongoose.Schema.Types.ObjectId, ref: "Userss"},
   review: { type: mongoose.Schema.Types.ObjectId, ref: "Userss"},

});
export default mongoose.model("cart", cartSchema);
