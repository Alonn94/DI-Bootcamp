import bcrypt from 'bcrypt';
import {ReadUsers,writeUsers} from './usercontroller.js';

export const register = (req, res) => {
    const {username, password} = req.body;
    if (!username || !password) {
        res.status(400).json({ error: "Username and password are required" });
        return;
    }

    const users = ReadUsers();
    if (users.find((user)=> user.username == username)){
        res.status(400).json({ error: "Username already exists" });
        return;
    }

    const hashedPassword = bcrypt.hashSync(password, 5);
    const newUser = { id: users.length+1, username, password:hashedPassword}
    users.push(newUser);
    res.json(newUser);
    writeUsers(users);
    res.status(201).json({message: "User created successfully"});
}


export const login = (req, res) => {
    const {username, password} = req.body;
    if (!username || !password) {
        res.status(400).json({ error: "Username and password are required" });
        return;
    }
    const users = ReadUsers();
    const user = users.find((user)=> user.username == username);
    if (!user){
        res.status(400).json({ error: "User not found" });
        return;
    }
    if (!bcrypt.compareSync(password, user.password)){
        res.status(400).json({ error: "Invalid password" });
        return;
    }
    res.json({message: "Login successful"});
}

