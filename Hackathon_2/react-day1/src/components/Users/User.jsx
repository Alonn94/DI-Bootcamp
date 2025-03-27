const User = ({name, email, username}) => {

    return ( 
        <>
        <div>
            <img src={`https://robohash.org/${id}`}/>
            <h2>Name: {name}</h2>
            <h3>Email: {email} </h3>
            <p>UserName:{username} </p>
        </div>
        </>
    );
};


export default User;