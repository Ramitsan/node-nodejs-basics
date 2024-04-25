import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));

let dirName = 'files';
let dirPath = path.join(__dirname, dirName);
const errMessage = 'FS operation failed';

const exists = async () => {
  try {
    await fs.access(dirPath, fs.F_OK);
  }
  catch (err) {
    throw new Error(errMessage);
  }
}


const list = async () => {
  await exists();
  console.log(await fs.readdir(dirPath));
};

await list();