import express from 'express';

import supplierController from '../controller/supplier.controller.js';
import authMiddleware from '../middleware/auth.middleware.js';

const SupplierRouter = express.Router();

SupplierRouter.post('/register', supplierController.create);
SupplierRouter.post('/login', supplierController.login);

SupplierRouter.use(authMiddleware);

SupplierRouter.get('/', supplierController.getAll);
SupplierRouter.get('/:id', supplierController.getById);
SupplierRouter.put('/:id', supplierController.update);
SupplierRouter.delete('/:id', supplierController.delete);
SupplierRouter.get('/:id/restore', supplierController.restore);

export default SupplierRouter;