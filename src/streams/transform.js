import { Transform } from 'stream';
import { pipeline } from 'stream/promises';

const transform = async () => {
  const trf = new Transform({
    transform(chunk, enc, callback) {
      callback(null, chunk.toString().split('').reverse().join('') + '\n');
    }
  });

  await pipeline(process.stdin, trf, process.stdout);
};

await transform();