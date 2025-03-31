import SupplierRouter from './supplier.route.js';

const initRouter = (app) => {
    app.use('/api/supplier', SupplierRouter);
}

export default initRouter;