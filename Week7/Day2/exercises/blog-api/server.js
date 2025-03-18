const express = require('express');
const app = express();
const PORT = 3000;
app.use(express.json());


app.listen(PORT,() => {
    console.log(`run on ${PORT}`);
});


let posts = [
    { id: 1, title: "First Post", content: "This is blog post number 1" },
    { id: 2, title: "second Post", content: "This is blog post number 2" },
    { id: 3, title: "third Post", content: "This is blog post number 3!!"},]

app.get('/posts',(request,response) => {
    response.json(posts);
});


app.get('/posts/:id', (request, response)=>{
    const { id } = request.params;
    const post= posts.find((p) => p.id == id);

    if (!post) {
        return response.json({message:"post not found"});
}
response.json(post)

});


app.post('/posts',(request, response) => {
    const {title, content} = request.body

    const newPost = {title, content, id:users.length + 1};
    posts.push(newPost);
    response.json(posts)

});


app.put('/posts/:id', (request, response)=> {
    const {id} = request.params
    const {content, title} = request.body;

    const index = posts.findIndex((p) => p.id == id);

    if (index===-1) {
        response.status(404).json({message: "post to update not found"});
        return;
    }

    posts[index] = {...posts[index],title,content};
    response.json(posts)

});

app.delete('/posts/:id',(request, response)=>{
    const {id} = request.params;
    const index = posts.findIndex((p) => p.id == id);

    posts,splice(index,1);
    response.json(users);


});


// app.use((request,response) => {
//     response.status(404).json({message:"Route not found"});
// });





