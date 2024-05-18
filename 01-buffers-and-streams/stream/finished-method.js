const { finished } = require('node:stream/promises');
const fs = require('node:fs');

const rs = fs.createReadStream('../../resources/big-csv.csv');

async function runAfterEnd() {
  console.log('Start');
  await finished(rs);
  console.log('Stream is done reading.');
}

run().catch(console.error);
rs.resume(); // Drain the stream.
