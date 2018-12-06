/// <reference types="node" />

const arg = process.argv[2];
const isProd = arg === '--prod';

if (isProd) {
    console.log('comp.prod.org');
} else {
    console.log('localhost:3001');
}