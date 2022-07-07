import mongoose from 'mongoose';

const itemSchema = mongoose.Schema({
    name: String,
    email: String,
    photo: String
}, {
    timestamps: true 
})

const Item = mongoose.model('Item', itemSchema);

export default Item;