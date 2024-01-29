import { Worker } from 'node:worker_threads';
import os from 'os';
import path from 'path';
import { fileURLToPath } from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const cpuData = os.cpus();
const cpuCount = cpuData.length;

const calculate = (input) => {
  return new Promise((res, rej) => {
    const worker = new Worker(path.join(__dirname, 'worker.js'));
    worker.on('message', (value) => {
      // console.log('main', input, value);
      res(value);
    })
    worker.on('error', (err) => {
      console.log(err)
      rej(err);
    })
    worker.postMessage(input);
  })
}

const s = {
  'fulfilled': 'resolved',
  'rejected': 'error'
}

const performCalculations = async () => {
  const input = new Array(cpuCount).fill(0).map((it, i) => {
    return i + 10;
  })
  const results = await Promise.allSettled(input.map(it => calculate(it)));
  console.log(results.map(it => {
    return {
      status: s[it.status],
      data: it.value || null
    }
  }));
};

await performCalculations();