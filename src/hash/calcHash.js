import { createHash } from 'crypto';
import { readFile } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const dirName = 'files';
const fileName = 'fileToCalculateHashFor.txt';
const filePath = path.join(__dirname, dirName, fileName);

const calculateHash = async () => {
  const data = await readFile(filePath);
  const hash = createHash('sha256').update(data).digest('hex');
  console.log(hash);
};

await calculateHash();