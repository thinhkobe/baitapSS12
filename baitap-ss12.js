// bai 1
// for (let i = 2; i <= 9; i++) {
//   for (let j = 1; j <= 10; j++) {
//     console.log(`${i}x${j}=`, i * j);
//   }
// }

// bai 2
// let N = parseInt(prompt("nhập số nguyên dương"));
// let total = 0;
// for (let i = 1; i <= N; i++) {
//    total = total+i;
// }
// console.log(total);

// bai 3

// let M = parseInt(prompt("nhập số M"))
// let N = parseInt(prompt("nhập số N"))

// for( M ; M <=N ;M++){
//     if(M%2===0){
//         console.log(M+"là số chẵn");
//     }else {
//         console.log(M+"là số lẻ");
//     }
// }

// BAI 4
// Sử dụng hàm prompt để lấy dữ liệu từ người dùng
// var inputString = prompt("Nhập một chuỗi:");

// Khởi tạo biến để lưu chuỗi đảo ngược
// var reversedString = "";

// Sử dụng vòng lặp để đảo ngược chuỗi
// for (var i = inputString.length - 1; i >= 0; i--) {
//     reversedString += inputString[i];
// }

// In chuỗi đảo ngược ra màn hình
// console.log("Chuỗi đảo ngược là: " + reversedString);

// Bài 5

let a1 = 0;
let a2 = 1;
let a3 = a1 + a2;
let fibonacystring = " ";
for (let i = 2; i < 20; i++) {
  a1 = a2;
  a2 = a3;
  a3 = a1 + a2;
  fibonacystring += a3 + " ";
}
console.log("fibonacystring", fibonacystring);
