module.exports = (app, express) => {

    const Customer = require('../models/customer.js');
    
    const router  = express.Router();

    router.get('/api/customer', (req, res) => {
        const query = Customer.find();

        query.exec((err, docs) => {
            if (err) {
                console.log(err);
            }
            else {
                res.json(docs);
            }
        });
    });

    router.get('/api/customer/:id', (req, res) => {
        const id = req.params.id;

        const query = Customer.findById(id).populate('orders.items.product');

        query.exec((err, doc) => {
            if (err) {
                console.log(err);
            }
            else {
                res.json(doc);
            }
        });

    });

    router.post('/api/customer', (req, res) => {
        const customer = new Customer(req.body);
        
        customer.save( (err, doc) => {
            if (err) {
                console.log(err);
            }
            else {
                res.json(doc);
            }
        });
    });

    router.put('/api/customer', (req, res) => {
        const customer = new Customer(req.body);
        
        const query = Customer.findByIdAndUpdate(customer.id, customer);

        query.exec((err, doc) => {
            if (err) {
                console.log(err);
            }
            else {
                res.json(doc);
            }
        });
    });

    router.delete('/api/customer/:id', (req, res) => {
        const id = req.params.id;

        const query = Customer.findByIdAndRemove(id);

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