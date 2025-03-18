const express = require("express");

const app = express();

const PORT = 3001;

app.listen(PORT,() => {
    console.log(`run on ${PORT}`);
});


// connection between two machines - send request and get something back
// CRUD Create with post(standard)-Read usually get-Update put requests -Delete with delete
// Rest API -

const users =[
    {id:1,name:"John", email:"jjj@gmail.com"},
    {id:2,name:"Johnny", email:"jjjxx@gmail.com"},

];


app.get('/api/users',(request, response) =>{
    response.send("Hello from my first server");
    response.json(users);
});

// R -read, get one user with params

app.get('/api/users/:id',(request,response)=>{
    console.log(request.params);
    const { id } = request.params;
    const user = users.find((item) => item.id == id);

    if (!user) {
        return response.json ({message: "user not found"});
    }
    res.json(user);
});

//R- read - get user by name query 

app.get("/api/search", (request, response) => {
    console.log(request.query);
    const {name} = request.query

    const filterUsers = users.filter (item => {
        return item.name.toLowerCase().includes(name.toLowerCase())
    })

    if (filterUsers.length === 0){
        response.status(404).json ({message:"no user match your search!!"});
        return;
    }

    response.json(filterUsers);
});


//C - create - POST

app.post('/api/users',(request, response) =>{
    console.log(request.body);
    const {name,email} = request.body

    const newUser = {name, email, id:users.length + 1};
    users.push(newUser);
    response.json(users);

});


//U Update - Put

app.put ('/api/users/:id',(request, response) => {
    const {id} = request.params
    const {name,email} = request.body;

    const index = users.findIndex((item) => item,id ==id);

    if (index === -1) {
        response.status(404).json({message:"user to update not found"});
        return;
    }

    user [index] = {...users [index], name, price }

    response.json(users);
});



//D - delete - delete

app.delete('/api/users/:id',(request,response) => {
    const {id} = request.params;
    const index = users.findIndex

})