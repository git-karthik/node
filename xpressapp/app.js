var xpress = require('express');
var scripcode = require('../scripcode');
console.log("Loaded Express Module");
// var swaggerUi = require('swagger-ui-express'),
//     swaggerDocument = require('./swagger.json');

const port = 3000;

var app = xpress();
// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
// app.use('/api/v1', router);
app.get('/', function(req, res){
    res.render('index.ejs',{title: 'Hello World!!!'});
});

app.get('/about', function(req, res){
    res.render('layout.ejs',{title: 'About Us', body:'<h1>About Us</h1>'});
});

app.get('/lookup/:code',(req, res) =>{
    res.write("Look up requested for:"+scripcode.lookup(req.params.code));
    console.log(scripcode.lookup(req.params.code));
    res.end();
});

app.get('/*', function(req, res){
    res.status(404).render('error.ejs',{title: 'Error Page'});
});

app.listen(port, ()=>{
    console.log('Server started on port:'+port);
});
