const express =  require('express');
const serverless = require('serverless-http');
const cors = require('cors');
const app = express();
const router = express.Router();
app.use(cors())

router.get('/', cors(), (req, res) => {
    res.json(
        [
            {
                'id': '001',
                'name': 'Will',
                'email': 'smith@gmail.com'
            },
            {
                'id': '002',
                'name': 'Sam Raimi',
                'email': 'sam@gmail.com'
            },
            {
                'id': '003',
                'name': 'lily Hoop',
                'email': 'lily@gmail.com'
            }
        ]
    )
})

app.use('/', router);
module.exports.handler = serverless(app);