import { createWriteStream } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const dirName = 'files';
const fileName = 'fileToWrite.txt';
const filePath = path.join(__dirname, dirName, fileName);

const write = async () => {
  const writebleStream = createWriteStream(filePath, { flags: 'a' });
  process.stdin.on('data', (data) => writebleStream.write(data.toString()));
};

await write();