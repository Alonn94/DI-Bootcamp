import data from "./data.json"

function PostList () {

const list = data.map((post, index) => (
    <div key={post.id}>
        {post.title} <p>{post.content}</p>
    </div>
));

return (
    <>
        {list}
    </>
);

};


export default PostList