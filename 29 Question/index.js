function printFileExtension(filename) {
    const parts = filename.split(".");
    const extension = parts[parts.length - 1];
    console.log("File extension:", extension);
}

// Example Usage
printFileExtension("example.js");
printFileExtension("index.html"); 
printFileExtension("document.pdf"); 