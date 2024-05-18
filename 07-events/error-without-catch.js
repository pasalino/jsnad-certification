const { EventEmitter } = require('events');

const ee = new EventEmitter();

process.stdin.resume(); // keep process alive

ee.emit('error', new Error('oh oh'));
