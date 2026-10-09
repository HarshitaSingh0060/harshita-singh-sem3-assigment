
const path = require('path');
const userFilename = 'result.txt';
const folderPath = path.join('report', '2026');
const filePath = path.join(folderPath, userFilename);

console.log('Folder Path:', folderPath);
console.log('File Path:', filePath);

const normalizedPath = path.normalize(
    'report//2026/./result.txt'
);

console.log('Normalized Path:', normalizedPath);