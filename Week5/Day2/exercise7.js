
(function(username){
    const UserLogin = document.getElementById("navbar");

    const UserElement = document.createElement("div");
    UserElement.textContent = `Welcome ${username}`;
    const UserPicture = document.createElement("img");
    UserPicture.setAttribute ("src", "https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=1024x1024&w=is&k=20&c=-mUWsTSENkugJ3qs5covpaj-bhYpxXY-v9RDpzsw504=")

    UserLogin.appendChild(UserElement)
    UserLogin.appendChild(UserPicture)

})("Alonn");


