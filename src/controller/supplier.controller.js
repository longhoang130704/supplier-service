import SupplierService from '../service/supplier.service.js';

class SupplierController {
    async create(req, res) {
        try {
            const supplier = await SupplierService.createSupplier(req.body);
            res.status(201).json(supplier);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async login(req, res) {
        try {
            const { username, password } = req.body;
            const data = await SupplierService.loginSupplier(username, password);
            res.json(data);
        } catch (error) {
            res.status(401).json({ message: error.message });
        }
    }

    async update(req, res) {
        try {
            const { id } = req.params;
            const updatedData = req.body;
            const supplier = await SupplierService.updateSupplier(id, updatedData);
            if (!supplier) return res.status(404).json({ message: "Supplier not found" });
            res.json(supplier);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async getAll(req, res) {
        try {
            const suppliers = await SupplierService.getAllSuppliers();
            res.json(suppliers);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async getById(req, res) {
        try {
            const { id } = req.params;
            const supplier = await SupplierService.getSupplierById(id);
            if (!supplier) return res.status(404).json({ message: "Supplier not found" });
            res.json(supplier);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async delete(req, res) {
        try {
            const supplier = await SupplierService.deleteSupplier(req.params.id);
            if (!supplier) return res.status(404).json({ message: "Supplier not found" });
            res.json({ message: "Supplier deleted successfully" });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
    
    async restore(req, res) {
        try {
            const supplier = await SupplierService.restoreSupplier(req.params.id);
            if (!supplier) return res.status(404).json({ message: "Supplier not found or not deleted" });
            res.json({ message: "Supplier restored successfully" });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}

export default new SupplierController();