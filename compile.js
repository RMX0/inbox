//get access to Inbox.sol
const path = require('path'); //directory path from compile file to inbox.js, path for cross platform compatibility
const fs = require('fs');
const solc = require('solc');

const InboxPath = path.resolve(__dirname, 'contracts', 'inbox.sol'); //dirname constant from root to Inbox folder
const source = fs.readFileSync(InboxPath, 'utf8');//read contents of file, specify encoding to read file

//Compile statement:
 //pass in source code and number of different contracts , get just bytecode and ABi from object :Inbox
 module.exports = solc.compile(source, 1).contracts[':Inbox'];
