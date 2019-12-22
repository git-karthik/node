import * as fs from "fs";
import * as ncp from "ncp";

export const removeDirSync = (dirPath: fs.PathLike) => {
    if (!fs.existsSync(dirPath)) {
        console.log(`${dirPath} does not exist!!!`);
        throw Error(`No such directory in path: ${dirPath}`);
    }

    fs.rmdirSync(dirPath, {recursive: true});
    console.log(`${dirPath} removed successfully`);
};

export const copyDirSync = (source: fs.PathLike, dest: fs.PathLike) => {
    if (!fs.existsSync(source)) {
        console.log(`${source} does not exist!!!`);
        throw Error(`No such directory in path: ${source}`);
    }

    ncp.ncp(source.toString(), dest.toString(), (err) => {
        if (err) {
            return console.log(err);
        }
        console.log("Copying files Complete");
    });
};

