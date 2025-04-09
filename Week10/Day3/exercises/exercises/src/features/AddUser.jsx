import { useDispatch } from "react-redux";
import { adduser } from "./userSlice"; 
import { useRef } from "react";

const AddUser = () => {
    const dispatch = useDispatch(); 
    const nameRef = useRef(); 
    const emailRef = useRef(); 

    const handleAddUser = () => {
        const user = {
            name: nameRef.current.value, 
            email: emailRef.current.value, 
        };
        dispatch(adduser(user)); 
        nameRef.current.value = ""; 
        emailRef.current.value = ""; 
    }; // Closing the handleAddUser function

    return (
        <div>
            <input ref={nameRef} placeholder="name" />
            <input ref={emailRef} placeholder="email" />
            <button onClick={handleAddUser}>Add User</button>
        </div>
    );
};

export default AddUser;