const cp = require("child_process");
let output = cp.execSync("node abc.js");
console.log("  ", + output);