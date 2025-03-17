import fs from "fs/promises";

async function readFileContent() {
    try {
        const data = await fs.readFile("./files/file-data.txt", "utf8");
        console.log("\nFile Content:");
        console.log(data);
    } catch (err) {
        console.error("Error reading the file:", err);
    }
}

export default readFileContent;