import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const dirName = 'files';
const fileName = 'fresh.txt';
const content = 'I am fresh and young';
const filePath = path.join(__dirname, dirName, fileName);
const errMessage = 'FS operation failed';

const exists = async () => {
  try {
    await fs.access(filePath, fs.F_OK);
  }
  catch (err) {
    return;
  }
  throw new Error(errMessage);
}

const create = async () => {
  await exists();
  await fs.writeFile(filePath, content);
};

await create();