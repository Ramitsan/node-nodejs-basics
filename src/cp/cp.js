import {spawn} from 'node:child_process';
import path from 'path';
import { fileURLToPath } from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const spawnChildProcess = async (args) => {
    process.stdin.on('data', (data) => res.stdin.write(data.toString()));
    const res = spawn('node', [path.join(__dirname, 'files', 'script.js'), ...args]);
    res.stdout.on('data', (chunk) => {
        console.log(chunk.toString());
    })
    res.stdout.on('close', () => {
        process.exit();
    })
};

// Put your arguments in function call to test this functionality
spawnChildProcess( ['someArgument1', 'someArgument2', '...']);
