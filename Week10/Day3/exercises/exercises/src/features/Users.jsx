import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "./userSlice.js"; 
import {AddUser} from "./AddUser.jsx";




const Users = () => {
    const dispatch=useDispatch();
    const {users, status, error} = useSelector((state) => state.usersReducers)

    const fetchUsers = () => {
        dispatch(getUsers()); 
    };

    return (
        <div>
            <h2>User Data</h2>
            <AddUser />
            <button onClick = {fetchUsers} >Fetch Users</button>
            {status === "loading" && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            <ul>
                {users.map((user)=> (
                    <li key={user.id}>
                        {user.name} {user.email}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Users;