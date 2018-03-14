module.exports = (app, express) => {

    const Customer = require('../models/customer.js');
    
    const router  = express.Router();

    router.put('/api/customer/:idCustomer/order', (req, res) => {
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

    module.exports = router;
    return module.exports;

}