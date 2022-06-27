// #########-----   Butun sonlarga oid masalalar   ----------########## // 
// 15-misol butun sonlarga oid 
// let x = 745, y1 = parseInt(x / 100), y2 = parseInt(x / 10) - (y1 * 10), y3 = parseInt(x % 10) 
// let javob = y2 * 100 + y1 * 10 + y3 
// console.log(javob);

// 17 misol//
// let x = 1725, x2 = x % 1000
// console.log(parseInt(x2/100));

// 24 - misol 
// let K = 7;
// let javob = K % 7
// console.log("0-ya, 1-du, 2-se, 3-cho, 4-pa, 5-ju, 6-sha");
// console.log(javob);

// 25 - misol 
// let K = 1;
// let javob = K % 7
// console.log("0-ya, 1-du, 2-se, 3-cho, 4-pa, 5-ju, 6-sha");
// console.log((javob + 3) % 7);

// 26-misol
// let K = 9;
// let javob = K % 7
// console.log("1-du, 2-se, 3-cho, 4-pa, 5-ju, 6-sha, 7-ya");
// console.log("kiritilgan son " + K + ", " + (javob % 7 + 1) + " raqamini yuqoridan qarab olishiz mumkin");

// 27-misol
let K = 1;
let javob = K % 7
console.log("1-du, 2-se, 3-cho, 4-pa, 5-ju, 6-sha, 7-ya");
console.log("kiritilgan son " + K + ", " + ((javob + 7) % 7 - 1) + " raqamini yuqoridan qarab olishiz mumkin");
