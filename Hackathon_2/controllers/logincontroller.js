import db from '../configuration/db.js';


export const login = async (req, res) => {
    const {username, password} = req.body;
    if (!username || !password) {
        res.status(400).json({ error: "Username and password are required" });
        return;
    }
  const users = await db.select('username', 'password').from('users').where({ username });
  const user = users.find((user)=> user.username == username);
  
    if (!user){
        res.status(404).json({ error: "User not found" });
        return;
    }
    if (password != user.password){     
        res.status(400).json({ error: "Invalid password" });
        return;
    }
    res.json({message: "Login successful"});
};


 

