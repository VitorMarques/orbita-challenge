const path = require("path");
const fs = require("fs");

const file = fs.readFileSync(path.resolve("C:\\solar_data.json"));
const jsonFile = JSON.parse(file);

const values = Array();

for (const element of jsonFile) {
    values.push(`[${Object.values(element)}]\n`);
}

fs.writeFileSync(path.resolve("C:\\solar_data_values.txt"), values);
