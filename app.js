const express = require('express');
const port = 3000;
const ejs = require('ejs');
const app = express();
const bodyParser = require('body-parser');
let list = [];


app.use(bodyParser.urlencoded({ extended: false }));
app.set('view engine', 'ejs');

app.use('/assets', express.static('assets'));
app.use( express.static('views'));

app.get('/', (req, res)=>{
    res.render('home');
});
app.get('/home', (req, res)=>{
    res.render('home');
});
app.get('/about', (req, res)=>{
    res.render('about');
});
app.get('/addcontact', (req, res)=>{
    res.render('addcontact');
});

app.post('/addcontact/OK', (req, res)=>{
    let {firstName, lastName, email} = req.body;
    list.push({firstName, lastName, email});
   res.render('contactList', {list});
});

app.post('/contacts/list', (req, res)=>{
    let {firstName, lastName, email} = req.body;
    list.push({firstName, lastName, email});
    res.render('contactList', {list});
});

app.get('/contacts/list', (req,res)=>{
    res.render('contactList', {list});
});

// app.get('/contact/:id', (req,res)=>{
//     const url = req.url;
//     const id = Number(req.params.id);
//     let flag = false;
//     for (let i = 0; i<list.length; i++){
//         if(list[i]._id === id){
//             res.json(list[i]);
//             flag= true;
//             break;
//         }
//     }
// });

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
});