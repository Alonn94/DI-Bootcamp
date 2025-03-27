import User from "./User";

const Userslist = (props) => {
    const { users } = props; // Destructure users from props

    return (
        <>
            <h2>Users List</h2>
            {users.map((item, index) => (
                <User 
                    key={index} 
                    name={item.name} 
                    email={item.email} 
                    username={item.username} 
                />
            ))}
        </>
    );
};

export default Userslist;