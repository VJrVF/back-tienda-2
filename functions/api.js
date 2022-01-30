const express =  require('express');
const serverless = require('serverless-http');
const cors = require('cors');
const suma = require('./suma');
const app = express();
const router = express.Router();
app.use(cors())

router.get('/', cors(), (req, res) => {

    const numero = suma;


    res.json(
        [
            {
                'id': numero,
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

// router.get('/item', cors(), (req, res) => {

    
//     res.json(
//         [
//             {
//                 'id': '001',
//                 'name': 'Gaara',
//                 'email': 'smith@gmail.com'
//             },
//             {
//                 'id': '002',
//                 'name': 'Sasuke',
//                 'email': 'sam@gmail.com'
//             },
//             {
//                 'id': '003',
//                 'name': 'Naruto',
//                 'email': 'lily@gmail.com'
//             }
//         ]
//     )
// })

app.use('/', router);
module.exports.handler = serverless(app);