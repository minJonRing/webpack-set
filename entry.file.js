const fs = require("fs");
const path = require("path");
const join = path.join;

function findSync(root) {
    let result = {};
    let files = fs.readdirSync(root);
    files.forEach((file, index) => {
        let fpath = join(root, file);
        let state = fs.statSync(fpath);
        if (state.isFile()) {
            let name = file.replace(/\.js/g, "");
            result[name] = fpath.replace(/\\/g, "/");
        }
    })
    return result;
}

module.exports = findSync;