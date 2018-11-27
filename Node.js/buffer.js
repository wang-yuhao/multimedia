const buf = Buffer.from('runoob','ascii');

//output 72756e6f6f62
console.log(buf.toString('hex'));

//output cnVub29i
console.log(buf.toString('base64'));
