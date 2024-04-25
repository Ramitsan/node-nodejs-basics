import { createGzip } from 'node:zlib';
import { pipeline } from 'stream/promises';
import { createReadStream, createWriteStream } from 'node:fs';

import path from 'path';
import { fileURLToPath } from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dirName = 'files';
const fileName = 'fileToCompress.txt';
const filePath = path.join(__dirname, dirName, fileName);
const archiveName = 'archive.gz';
const archivePath = path.join(__dirname, archiveName);

const source = createReadStream(filePath);
const dest = createWriteStream(archivePath);

const compress = async () => {
  await pipeline(source, createGzip(), dest);
};

await compress();