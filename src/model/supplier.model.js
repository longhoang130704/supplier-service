import mongoose from 'mongoose';
import mongooseDelete from 'mongoose-delete';

const Schema = mongoose.Schema;

const Supplier = new Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    CompanyName: { type: String, required: true },
    ContactName: { type: String },
    ContactTitle: { type: String },
    Address: { type: String },
    City: { type: String },
    Region: { type: String },
    Country: { type: String },
    Phone: { type: String },
    Fax: { type: Number },
    productSupplied: [{ type: String }], // Mảng lưu danh sách sản phẩm dưới dạng string
}, { 
    timestamps: true, 
});

Supplier.plugin(mongooseDelete, {
    deletedAt: true,
    overrideMethods: 'all',
});

export default mongoose.model('Supplier', Supplier);
