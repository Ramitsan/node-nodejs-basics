import { createReadStream } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const dirName = 'files';
const fileName = 'fileToRead.txt';
const filePath = path.join(__dirname, dirName, fileName);

const read = async () => {
  const readableStream = createReadStream(filePath, 'utf-8');
  let data = '';
  readableStream.on('data', chunk => process.stdout.write(data += chunk));
};

await read();