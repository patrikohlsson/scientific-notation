var test = require('tape'),
  scientific = require('./');

test('parsing scientific notation', function(t) {
  t.deepEqual(scientific('A4'), [0, 0]);
  t.deepEqual(scientific('C0'), [-33, -57]);
  t.deepEqual(scientific('c#3'), [-12, -20]);
  t.deepEqual(scientific('D2'), [-18, -31]);
  t.deepEqual(scientific('Ebb0'), [-31, -55]);
  t.deepEqual(scientific('gx6'), [13, 24]);
  t.deepEqual(scientific('fb3'), [-9, -16]);
  t.end();
});
