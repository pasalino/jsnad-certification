const { EventEmitter } = require('events');
const ee = new EventEmitter();

process.stdin.resume(); // keep process alive

ee.on('error', (err) => {
  console.log('got error:', err.message);
});

ee.on('data', (data) => {
  console.log('data', data);
});

ee.emit('error', new Error('oh oh'));
ee.emit('data', 'DD');
