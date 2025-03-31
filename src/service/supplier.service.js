import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import Supplier from '../model/supplier.model.js';


const JWT_SECRET = process.env.JWT_SECRET || "your_secret_key";

class SupplierService {
    async createSupplier(data) {
        const { username, password } = data;
        const existingSupplier = await Supplier.findOne({ username });
        if (existingSupplier) throw new Error("Username already exists");

        const hashedPassword = await bcrypt.hash(password, 10);
        const supplier = new Supplier({ ...data, password: hashedPassword });
        return await supplier.save();
    }

    async getAllSuppliers() {
        return await Supplier.find({});
    }

    async getSupplierById(id) {
        return await Supplier.findById(id);
    }

    async updateSupplier(id, data) {
        if (data.password) {
            data.password = await bcrypt.hash(data.password, 10);
        }
        const supplier = await Supplier.findByIdAndUpdate(id, data, { new: true });
        if (!supplier) throw new Error("Supplier not found");
        return supplier;
    }
    

    async loginSupplier(username, password) {
        const supplier = await Supplier.findOne({ username });
        if (!supplier) throw new Error("Invalid username or password");

        const isMatch = await bcrypt.compare(password, supplier.password);
        if (!isMatch) throw new Error("Invalid username or password");

        const token = jwt.sign({ id: supplier._id, username: supplier.username }, JWT_SECRET, { expiresIn: '7d' });
        return { token, supplier };
    }

    async deleteSupplier(id) {
        return await Supplier.delete({ _id: id }); // Xóa mềm
    }
    
    async restoreSupplier(id) {
        return await Supplier.restore({ _id: id }); // Khôi phục
    }
}

export default new SupplierService();