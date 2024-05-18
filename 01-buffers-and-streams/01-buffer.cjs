// It's not necessary to import buffer because Buffer class is a global object in Node
const { Buffer } = require('buffer');
const { StringDecoder } = require('string_decoder');

// How to create a buffer
const bufferOfString = Buffer.from('hello', 'utf-8');

// How to represent a buffer content
console.log(bufferOfString);
console.log(bufferOfString.toString());
console.log(bufferOfString.toString('ascii'));
console.log(bufferOfString.toString('utf-8'));
console.log(bufferOfString.toString('base64'));
console.log(bufferOfString.toString('hex'));

// Allocate new buffer
const buf = Buffer.alloc(15);
console.log(buf);

const bufUnsafe = Buffer.allocUnsafe(15);
console.log(bufUnsafe);

const prefilledBuffer = Buffer.alloc(19, 'ab');
console.log(prefilledBuffer);
console.log(prefilledBuffer.toString());

// Edit buffer
const editableBuffer = Buffer.alloc(3);
editableBuffer[0] = 65;
editableBuffer[1] = 72;
editableBuffer[2] = 81;
console.log('Editable buffer 0:', editableBuffer.toString('utf8'));

// It's possible edit buffer by index without changing
editableBuffer[2] = 82;
console.log('Editable buffer 1:', editableBuffer.toString('utf8'));
editableBuffer.write('Cater');
console.log('Editable buffer 2:', editableBuffer.toString('utf8'));

//Copy a buffer
const b1 = Buffer.alloc(50);
const b2 = Buffer.from('How are you?');
b2.copy(b1);
console.log('Copy buffer 1:', b1.toString('utf8'));

b2.copy(b1, 20, 4, 10);
console.log('Copy buffer 2:', b1.toString('utf8'));

//Fill a buffer
b1.fill('X');
console.log('Fill 1:', b1.toString());
b2.copy(b1, 5, 4, 10);
console.log('Fill 2:', b1.toString());

//Check the filled value
const XAsciiValue = 'X'.charCodeAt(0);
b1.filter((value) => value === XAsciiValue).forEach((value, pos) => {
  console.log(`${pos}: "${String.fromCharCode(value)}"`);
});

//Split buffer
const splitBuffer = Buffer.from('How meet your mother? Have you an answer?');
//Same reference
const firstSentence = splitBuffer.subarray(0, splitBuffer.indexOf('?') + 1);
console.log('Subarray 1:', firstSentence.toString());
Buffer.from('kill').copy(firstSentence, splitBuffer.indexOf('meet'));
console.log('Subarray 2:', firstSentence.toString());
console.log('Subarray 3 referenced:', splitBuffer.toString());

//Blob
const blob = new Blob(['New Blob']);
blob.text().then(console.log);

//Buffer byte length
const string = 'tcyvghb jknm£$%&/U(IO';
console.log('Buffer length 1:', string.length, Buffer.byteLength(string));

const frag1 = Buffer.from('f09f', 'hex');
const frag2 = Buffer.from('9180', 'hex');
console.log(frag1.toString()); // prints �
console.log(frag2.toString()); // prints ��
const decoder = new StringDecoder();
console.log(decoder.write(frag1)); // prints nothing
console.log(decoder.write(frag2)); // prints 👀
