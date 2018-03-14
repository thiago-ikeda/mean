module.exports = (app, express) => {

    const Product = require('../models/product.js');
    
    const router  = express.Router();

    router.get('/api/product', (req, res) => {
        const query = Product.find();

        query.exec((err, docs) => {
            if (err) {
                console.log(err);
            }
            else {
                res.json(docs);
            }
        });
    });

    router.get('/api/product/:id', (req, res) => {
        const id = req.params.id;

        const query = Product.findById(id);

        query.exec((err, doc) => {
            if (err) {
                console.log(err);
            }
            else {
                res.json(doc);
            }
        });

    });

    router.post('/api/product', (req, res) => {
        const product = new Product(req.body);
        
        product.save( (err, doc) => {
            if (err) {
                console.log(err);
            }
            else {
                res.json(doc);
            }
        });
    });

    router.put('/api/product', (req, res) => {
        const product = new Product(req.body);
        
        const query = Product.findByIdAndUpdate(product.id, product);

        query.exec((err, doc) => {
            if (err) {
                console.log(err);
            }
            else {
                res.json(doc);
            }
        });
    });

    router.delete('/api/product/:id', (req, res) => {
        const id = req.params.id;

        const query = Product.findByIdAndRemove(id);

        query.exec((err, doc) => {
            if (err) {
                console.log(err);
            }
            else {
                res.json(doc);
            }
        });
    });

    module.exports = router;
    return module.exports;

}