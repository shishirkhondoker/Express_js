let express = require('express');
let app = express();

app.get('/', (req, res)=>{
    res.send('Hello World!');
})
app.get ('/about',(req,res)=>{
    res.send('About page');
})

app.get('/contact',(req,res)=>{
    res.send('contact page');
})

app.listen(5050, ()=>{
    console.log('Server is running on port 5050');
})