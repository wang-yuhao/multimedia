//create a Buffer with a length of 10 and padding with 0.
const buf1 = Buffer.alloc(10);

//create a buffer with a length of 10 and padding with 0x1.
const buf2 = Buffer.alloc(10,1);

//create a buffer with a length of 10 and uninitialized
//this methode is more quickly than Buffer.alloc()
//but the returned Buffer instance may contain old data.
//so need overwrite with fill() or write()
const buf3 = Buffer.allocUnsafe(10);

//create a Buffer contain [0x1, 0x2, 0x3]
const buf4 = Buffer.from([1,2,3]);

//create a Buffer contain UTF-8 byte[0x74,0xc3,0xa9,0x73,0x74] 
const buf5 = Buffer.from('test');
