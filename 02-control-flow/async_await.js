const files = Array.from(Array(3)).fill(__filename);
console.log(files);

const a = async (name) => {
  console.log(name);
  return 'ok';
};

const b = async (name) => {
  console.log('what?');
  return new Promise((success, reject) => {
    if (name === 'pino') success('good');
    reject('bad');
  });
};

const c = async (s) => s.toUpperCase();

a('ddd').then(console.log);

b('pino')
  .then((r) => console.log(r))
  .catch((err) => console.error('err', err))
  .finally(() => console.log('End'));

const lower = c('lower').then((p) => 'dd');
console.log(lower);

setTimeout(() => console.log('dd', lower), 2000);

const testAsync = async (message) => {
  console.log('message', message);
  return message.toUpperCase();
};

testAsync('new message').then((v) => console.log('message in then', v));
testAsync('new message2');

const testPromise = (p) =>
  new Promise((success, _) => {
    console.log('execute promise');
    success('message' + p);
  });

testPromise('testPromise').then((v) => console.log('value promise,', v));
