const { promises: fs } = require('fs');
const path = require('path');

const multiplication = async (filePath, key, multiplier, targetPath) => {
    // Read content from the json file.
    const source = await fs.readFile(
        path.join(__dirname, filePath),
        'utf8'
    );

    // Parse json source to an object and get value of key.
    const baseObject = JSON.parse(source);
    const list = baseObject[key];

    // Multiplication.
    let output = [];
    let id = 0;
    for (let i = 0; i < multiplier; i++) {
        for (let j = 0; j < list.length; j++) {
            id++;
            let item = Object.assign({}, list[j]);
            item.id = id;
            output.push(item);
        }
    }
    
    // Write out to a file.
    baseObject[key] = output;
    await fs.writeFile(
        path.join(__dirname, targetPath),
        JSON.stringify(baseObject),
        'utf8'
    );

    return `File has writen to the path: ${targetPath} with ${output.length} rows.`;
};

multiplication(process.argv[2], process.argv[3], parseInt(process.argv[4]), process.argv[5]).then(
    data => console.log(data),
    err => console.error(err)
);

