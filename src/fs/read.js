import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));

let fileName = 'fileToRead.txt';
let dirName = 'files';
let filePath = path.join(__dirname, dirName, fileName);
const errMessage = 'FS operation failed';

const exists = async () => {
  try {
    await fs.access(filePath, fs.F_OK);
  }
  catch (err) {
    throw new Error(errMessage);
  }
}

const read = async () => {
  await exists();
  let content = await fs.readFile(filePath, 'utf8');
  console.log(content);
};

await read();