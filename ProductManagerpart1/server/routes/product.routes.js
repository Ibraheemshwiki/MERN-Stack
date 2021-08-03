const ProductController = require('../controllers/product.controller');
module.exports = function(app){
    app.get('/api', ProductController.index);
    app.post('/api/products', ProductController.createProduct);
    app.get('/api/all-products', ProductController.getAllProducts);
    app.get('/api/all-products/:id', ProductController.getProduct);
    app.put('/api/all-products/:id', ProductController.updateProduct);
    app.delete('/api/all-products/:id', ProductController.deleteProduct);

}