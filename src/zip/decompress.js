import { createUnzip } from 'node:zlib';
import { pipeline } from 'stream/promises';
import { createReadStream, createWriteStream } from 'node:fs';

import path from 'path';
import { fileURLToPath } from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dirName = 'files';
const fileName = 'fileToCompress.txt';
const filePath = path.join(__dirname, fileName);
const archiveName = 'archive.gz';
const archivePath = path.join(__dirname, archiveName);

const source = createReadStream(archivePath);
const dest = createWriteStream(filePath);

const decompress = async () => {
  await pipeline(source, createUnzip(), dest);
};

await decompress();