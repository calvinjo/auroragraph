var express = require('express');
var app     = express();
var port    = process.env.PORT || 3000;
var path    = require('path');
var bodyParser = require('body-parser');
var { graphqlHTTP } = require('express-graphql');
var { buildSchema } = require('graphql');
var schemaGraphql = require('../model/graphql/schema');
var rootGraphql = require('../model/graphql/root');

// GraphQL schema
var schema = buildSchema(schemaGraphql.schema);
var rootSchema =rootGraphql.root

app.use(express.static('../assets'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');
app.set('views',path.join(__dirname,'../views'));
app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: rootSchema,
    graphiql: true,
}));



// app.get('/mahasiswa', function(req, res) {
// 	require('../controllers/mahasiswaController').index(req,res);
// });

// app.post('/mahasiswa', function(req, res) {
// 	require('../controllers/mahasiswaController').create(req,res);
// });

// app.put('/mahasiswa/:id', function(req, res) {
// 	require('../controllers/mahasiswaController').update(req,res);
// });

// app.get('/show/edit/mahasiswa/:id', function(req, res) {
// 	require('../controllers/mahasiswaController').show_edit(req,res);
// });

// app.delete('/mahasiswa/:id', function(req, res) {
// 	res.send(require('../controllers/mahasiswaController').erase(req,res));
// });

app.listen(port);

console.log('Aurora Serve on port ' + port);