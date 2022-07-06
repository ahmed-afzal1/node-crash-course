const express = require('express')
const app = express()

app.set('view engine', 'ejs');
// app.set('views', './views');

app.get('/', function (req, res) {
    res.render('index',{title:'Home'});
})

app.get('/about', function (req, res) {
    res.render('about',{title:'About'});
})

app.get('/blogs/create', function (req, res) {
    res.render('create',{title:'Blog create'});
});

app.get('/about-us', function (req, res) {
    res.redirect('/about');
})

app.use((req,res)=>{
    res.status(404).render('404',{title:'404'});
})

app.listen(3000);