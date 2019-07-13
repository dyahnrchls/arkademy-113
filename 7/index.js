const path = require('path');
const express = require('express');
const hbs = require('express-handlebars');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const app = express();

const conn = mysql.createConnection({
    host: 'localhost',
    user:'root',
    password:'',
    database:'arkademy113'
});

conn.connect((err) => {
    if(err) throw err;
    console.log('database connected');
});

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:false}));

//set public folder as static folder for static file
app.use('/assets',express.static(__dirname + '/public'));

//views
app.get('/', (req, res) => {
    let sql = "select * from tableviews";
    let query = conn.query(sql, (err, results) => {
        if(err) throw err;
        res.render('homepage', {
            results: results
        });
    });
});

//insert
app.post('/add', (req, res) => {
    let data = {name:req.body.name, work:req.body.work, salary:req.body.salary};

    let work = "(select id from work where name = '" + (data.work) + "')";
    let salary = "(select id from salary where salary = '" + (data.salary) + "')";
    
    let sql = "insert into name(name, id_work, id_salary) values (?," + work + "," +  salary + ")";
    let query = conn.query(sql, [data.name], (err, results) => {
        if(err) throw err;
        res.redirect('/');
    });
});

//update
app.post('/edit', (req, res) => {
    let data = {name:req.body.name, work:req.body.work, salary:req.body.salary, id:req.body.id};

    let work = "(select id from work where name = '" + (data.work) + "')";
    let salary = "(select id from salary where salary = '" + (data.salary) + "')";

    let sql = "update name set name=?,id_work=" + work + ",id_salary=" + salary + "WHERE id = " + [data.id];
    let query = conn.query(sql, [data.name], (err, results) => {
        if(err) throw err;
        res.redirect('/');
    });

});

// delete
app.post('/delete', (req, res)=>{
    let id = req.body.id;
    let sql = "delete from name where id = ?";
    let query = conn.query(sql, [id], (err, results) => {
        if(err) throw err;
        res.redirect('/');
    });
});


app.listen(1307, () => {
    console.log('server is running at port 1307');
})