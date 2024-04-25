import { parentPort } from 'node:worker_threads';
parentPort.on('message', (value) => {
    // console.log('worker' + value);
    sendResult(value);
});

// n should be received from main thread
const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

const sendResult = (value) => {
    // This function sends result of nthFibonacci computations to main thread
    if(typeof value != 'number') throw new Error('worker failed');
    parentPort.postMessage(nthFibonacci(value));
};
