import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const dirName = 'files';
const dirNameCopy = 'files_copy';
const dirPath = path.join(__dirname, dirName);
const dirPathCopy = path.join(__dirname, dirNameCopy);
const errMessage = 'FS operation failed';

// if files folder doesn't exists Error must be thrown   
const dirExists = async () => {
  try {
    await fs.access(dirPath, fs.F_OK);
  }
  catch (err) {
    throw new Error(errMessage);
  }
}

// if files_copy has already been created Error must be thrown  
const dirCopyExists = async () => {
  try {
    await fs.access(dirPathCopy, fs.F_OK);
  }
  catch (err) {
    return;
  }
  throw new Error(errMessage);
}

const copy = async () => {
  await dirExists();
  await dirCopyExists();

  // create a directory
  await fs.mkdir(dirPathCopy, { recursive: true });

  // read files from source directory and copy to new
  const files = await fs.readdir(dirPath, { withFileTypes: true });

  for (const file of files) {
    const { name } = file;

    const currentFilePath = path.join(dirPath, name);
    const copyFilePath = path.join(dirPathCopy, name);

    await fs.copyFile(currentFilePath, copyFilePath);
  }
};

await copy();
