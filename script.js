let title = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";
let splitRows = title.split("\n");
console.log(splitRows);
let numRow = splitRows.length;
console.log(numRow);
const test = [];
for (i = 0; i < numRow; i++) {
    test.push(splitRows[i].split(","));
}
console.log(test);