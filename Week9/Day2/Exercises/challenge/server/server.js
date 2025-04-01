const express = require ('express');
const bodyParser = require ('body-parser');
const cors = require ('cors');

const app=express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

app.get('/api/hello',(req,res) =>{
    res.send({message:"Hello from Express"});
});

app.post('/api/world',(req,res) => {
    console.log("received post:", req.body);
    res.send({message:` I received your post request. This is what you sent me : ${req.body.input}`});
});

app.listen(PORT,() => {
    console.log(`Server running on ${PORT}`);
});



