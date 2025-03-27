

   const DeleteUser= (req, res) => {
    const { id } = req.params;
    const index = users.findIndex((item) => item.id == id);
  
    users.splice(index, 1);
    res.json(users);
  };


   const UpdateUser= (req, res) => {
    const { id } = req.params;
    const { name, email } = req.body;
  
    const index = users.findIndex((item) => item.id == id);
  
    if (index === -1) {
      res.status(404).json({ message: "user to update not found" });
      return;
    }
  
    users[index] = { ...users[index], name, email };
  
    res.json(users);
  };


   const CreateNewUser=  (req, res) => {
    console.log(req.body);
    const { name, email } = req.body;
  
    const newUser = { name, email, id: users.length + 1 };
    users.push(newUser);
    res.json(users);
  };
  
  const GetAllUser= (req, res) => {
    res.json(users);
  };
  

  module.exports{}