


//Part 2 - Expanding

const csvStr = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";

let splitRows = csvStr.split("\n");
console.log(splitRows, "\n");
let numRow = splitRows.length;
console.log(numRow, "\n");
const csvData = [];
for (i = 0; i < numRow; i++) {
    csvData.push(splitRows[i].split(","));
}
console.log(csvData, "\n");

// Part 3 - Transforming Data
test = [];
headings = [];
csvStr.split('\n').forEach((string) => {
    // If first line, add to headers
    if (string == csvStr.split('\n')[0]){
        headings = (string.toLowerCase().split(","))
    }
    else {
        obj = {};
        // for each column in headings
        for (i=0; i < headings.length; i++) {
            string.split(",").forEach((item) => {
                // add key:value to object
                obj[headings[i]] = string.split(",")[i];
            })
        }
        test.push(obj); // push object to data
    }
})
console.log(test, "\n"); // print out array


// Part 4- Sorting and Manipulating 

// remove last element from sorted array
test.pop();
// insert object at index 1
test.splice(1, 0, { id: "48", name: "Barry", occupation: "Runner", age: "25" });
// add object at end of array
test.push({ id: "7", name: "Bilbo", occupation: "None", age: "111" });
// calculate the average age of the group.
let total = 0;
for (const index in test) {
    total += +test[index].age; // add to total (turn string to int using +);
}
let avg = total / test.length; // find average by dividing by total number of data
console.log(avg, "\n"); // print out average.



// Part 5 - Full Circle
let convertToCSV = '';
test.forEach((obj) => {
    convertToCSV += Object.values(obj).toString()+"\n";
})
console.log(convertToCSV, "\n");