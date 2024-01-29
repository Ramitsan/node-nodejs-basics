import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));

let fileName = 'wrongFilename.txt';
let newFileName = 'properFilename.md';
let dirName = 'files';
let filePath = path.join(__dirname, dirName, fileName);
let renameFilePath = path.join(__dirname, dirName, newFileName);
const errMessage = 'FS operation failed';

// if there's no file wrongFilename.txt Error must be thrown
const fileExists = async () => {
  try {
    await fs.access(filePath, fs.F_OK);
  }
  catch (err) {
    throw new Error(errMessage);
  }
}

// if properFilename.md already exists Error must be thrown  
const renameFileExists = async () => {
  try {
    await fs.access(renameFilePath, fs.F_OK);
  }
  catch (err) {
    return;
  }
  throw new Error(errMessage);
}

const rename = async () => {
  await fileExists();
  await renameFileExists();
  fs.rename(filePath, renameFilePath);
};

await rename();