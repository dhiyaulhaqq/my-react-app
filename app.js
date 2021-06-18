var path = require('path');
var express = require('express');
var app = express();
var PouchDB = require('pouchdb');
var ExpressPouchDB = require('express-pouchdb');
// var app = ExpressPouchDB();
var DataPouchDB = PouchDB.defaults({
    prefix: path.join(__dirname, '/data/')
});
var db = ExpressPouchDB();

const port = process.env.PORT || 3000; // 5984 PouchDB default port

// console.log(db);

// app.setPouchDB(PouchDB);

// app.get('/db', (req, res) => {
//     res.set('Content-Type', 'application/json');
//     res.set('Access-Control-Allow-Origin','*');
//     var obj = { name: 'Iqbal'}
//     var json = JSON.stringify(obj);
//     res.send(obj);
// });

// app.listen(port, () => {
//     console.log(`PouchDB is listening at http://localhost:${port}`);
//     console.log(
//         `Fauxton as a debugging tool at http://localhost:${port}/_utils/`
//     );
// });

/* 
var express = require('express');
var app = express();

app.use('/db', require('express-pouchdb')(PouchDB));

app.listen(3000);
*/

// var options = {
//     configPath: './config.json',
//     mode: 'fullCouchDB',
// overrideMode: {
//     include: ['routes/fauxton']
// }
// }

// var app = ExpressPouchDB(options);
// app.setPouchDB(PouchDB);

var addHeader = function(req, res, next) {
    // res.set('Access-Control-Allow-Origin', 'http://127.0.0.1:8181');
    // console.log(req.headers);

    console.log(req.headers);

    // res.set('Access-Control-Allow-Origin', '*');
    // res.set('Access-Control-Allow-Credentials', true);
    // res.set('Access-Control-Allow-Headers', 'accept, authorization, content-type, origin, referer');
    // res.set('Access-Control-Allow-Methods', 'GET, PUT, POST, HEAD, DELETE, OPTIONS');
    next();
};

app.use('/db', express.json());

// app.use(express.urlencoded({ extended: true }));

// app.use(addHeader);

app.use('/db', db);

app.use('/', express.static('dist'));

app.listen(port, () => {
    console.log(`App is listening at http://localhost:${port}`);
});
