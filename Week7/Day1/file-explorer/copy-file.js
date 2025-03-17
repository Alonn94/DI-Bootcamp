const fs = require("fs");

fs.readFile("source.txt", "utf8", (err, data) => {
    if (err) {
        console.error("Error reading source.txt:", err);
        return;
    }

    console.log("Content of source.txt:", data);

    fs.writeFile("destination.txt", data, (err) => {
        if (err) {
            console.error("Error writing to destination.txt:", err);
        } else {
            console.log("File successfully copied to destination.txt");
        }
    });
});