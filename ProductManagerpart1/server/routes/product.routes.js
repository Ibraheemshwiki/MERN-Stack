const ProductController = require('../controllers/product.controller');
module.exports = function(app){
    app.get('/api', ProductController.index);
    app.post('/api/products', ProductController.createProduct);
    app.get('/api/all-products', ProductController.getAllProducts);
    app.get('/api/all-products/:id', ProductController.getProduct);

}