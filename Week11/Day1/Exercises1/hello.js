//Exercise1
var message = "Hello, World!";
console.log(message);
//Exercise2
var age = 31;
var firstname = "Alonn";
console.log(age, firstname);
//Exercise3
var id;
id = 111;
id = "abcd";
//Exercise4
var checkNumber = function (num) {
    if (num > 0) {
        return "pos";
        if (num === 0) {
            return "zero";
        }
    }
    else {
        return "neg";
    }
};
//Exercise5
console.log(checkNumber(10));
var getDetails = function (name, age) {
    return [name, age, "Hello ".concat(name, ", you are ").concat(age, " years old!")];
};
console.log(getDetails("Alonn", 31));
//Exercise6
var Person;
var createPerson = function (name, age) {
    return Person = {
        name: name,
        age: age
    };
};
console.log(createPerson("Alonn", 31));
// //Exercise7
// var inputElement = document.getElementById("app");
// inputElement.value = "Hello, TypeScript!";
//Exercise8
var getAction = function (role) {
    switch (role.toLowerCase()) {
        case "admin":
            return "Manage users and settings";
        case "editor":
            return "Edit content";
        case "viewer":
            return "View content";
        case "guest":
            return "Limited access";
        case "unknown":
            return "invalid role";
    }
};
function greet(name) {
    return "Hello, ".concat(name !== null && name !== void 0 ? name : "there", "!");
}
console.log(greet()); // ➜ "Hello, there!"
