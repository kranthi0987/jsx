const express = require("express");
const upload = require("./upload");
const cors = require("cors");
const bodyParser = require('body-parser')
const multer = require('multer');
const MongoClient = require('mongodb').MongoClient
const myurl = 'mongodb://localhost:27017';
const path = require('path');
const server = express();

MongoClient.connect(myurl, (err, client) => {
    if (err) return console.log(err)
    db = client.db('test')
    server.listen(3000, () => {
        console.log('listening on 3000')
    })
})
var corsOptions = {
    origin: "*",
    optionsSuccessStatus: 200
};

server.use(cors(corsOptions));

server.post("/upload", upload);
//ROUTES WILL GO HERE
server.get('/', function (req, res) {
    res.json({message: 'WELCOME'});
});
// SET STORAGE
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + '.jpg')
    }
});
var upload1 = multer({storage: storage});
server.post('/uploadfile', upload1.single('myFile'), (req, res, next) => {
    const file = req.file;
    var fs = require("fs");
    var img = fs.readFileSync(req.file.path);
    var encode_image = img.toString('base64');
    // Define a JSONobject for the image attributes for saving to database

    var finalImg = {
        contentType: req.file.mimetype,
        image: new Buffer(encode_image, 'base64')
    };
    db.collection('quotes').insertOne(finalImg, (err, result) => {
        console.log(result)
        if (err) return console.log(err)
        console.log('saved to database')
    });
    if (!file) {
        const error = new Error('Please upload a file')
        error.httpStatusCode = 400
        return next(error)
    }
    console.log("db saved");
    res.send(file)

});
server.get('/photos', (req, res) => {
    db.collection('quotes').find().toArray((err, result) => {

        const imgArray = result.map(element => element._id);
        console.log(imgArray);

        if (err) return console.log(err)
        res.send(imgArray)

    })
});

server.get('/photo/:id', (req, res) => {
    var filename = req.params.id;

    db.collection('quotes').findOne({'_id': ObjectId(filename)}, (err, result) => {

        if (err) return console.log(err);

        res.contentType('image/jpeg');
        res.send(result.image.buffer)


    })
});

server.listen(8000, () => {
    console.log("Server started!");
});
