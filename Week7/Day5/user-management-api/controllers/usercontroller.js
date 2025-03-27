import fs from "fs";

//helper function to read userjason
export const ReadUsers = () => {
    try {
        const data = fs.readFileSync("./users.json", "utf8");
        return JSON.parse(data);
    } catch (err) {
        console.error("Error reading users:", err);
        return [];
    } 
};

export const ListofUsers = (req, res) => {
    const users = ReadUsers();
    res.json(users);
};

export const GetUserByID = (req, res) => {
    const id = req.params.id;
    const users = ReadUsers();
    const user = users.find((user) => user.id == id);
    if (user) {
        res.json(user);
    } else {
        res.status(404).json({ error: "User not found" });
    }
};

export const UpdateUser = (req, res) => {
    const id = req.params.id;
    const user = req.body;
    const users = ReadUsers();
    const index = users.findIndex((user) => user.id == id);
    if (index === -1) {
        res.status(404).json({ error: "User not found" });
        return;
    }
    users[index] = user;
    res.json(user);
    writeUsers(users);
}
export const writeUsers = (users) => {
    try {
        fs.writeFileSync("./users.json", JSON.stringify(users));
    } catch (err) {
        console.error("Error writing users:", err);
    }
};




