// khai báo mảng
// const arrayNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(arrayNumber);
// cách tạo mảng
// cách 1 sử dụng đối tượng Array
const array1 = new Array(1,"A",null,undefined)

for(let i= 0;i<array1.length;i++){
  console.log("Index",i);//vị trí
  console.log(array1[i])//giá trị của các phần tử
}
// cách 2 :khai báo theo kiểu liternal
const array2 =[1,2,3,4,5];

for(let i=0;i<array2.length;i++){
  console.log(array2[i])
}

// truy xuất lấy ra từng phần tử của mảng
// // cách 1
// console.log("số lượng phần tử trong mảng :", arrayNumber.length);
// console.log("phần tử của mảng tại vị trí thứ 4 ", arrayNumber[4]);
// console.log("phần tử của mảng tại vị trí thứ 5", arrayNumber[5]);

//
// // cách 2 dùng vòng lặp
// for(let i = 0;i<arrauNumber.length;i++){
//     console.log("vị trí trong mảng :",i);
//     if(arrayNumber[i]===4){console.log(i)}
// }

// các thao tác với mảng
// 1 thêm phần tử vào cuối mảng push()
// arrayNumber.push(10);
// console.log("mảng sau khi push", arrayNumber);

// 2,xóa phần tử cuối mảng
// arrayNumber.pop(0);
// console.log("mảng sau khai pop", arrayNumber);
// let del = arrayNumber.pop();
// console.log(del);

//3,thêm phần tử ở đầu mảng

// arrayNumber.unshift(0);
// console.log("Mảng sau khi unshift", arrayNumber);

// xóa phần tử ở đầu mảng
// arrayNumber.shift();
// console.log("mảng sau khi shift:", arrayNumber);

// nối các mảng lại với nhau
// let array1 = [1, 2, 3];
// let array2 = [4, 5, 6];

// kết hợp 2 mảng
// cách 1
// let newArray = array1.concat(array2);
// cách 2
// let newArray = [...array1, ...array2];

// console.log("mảng mới", newArray);

// Hàm forEach()=>Lặp qua các phần tử của mảng
// arrayNumber.forEach((array) => {
//   console.log(array);
// });

const array3 = [3, 2, 6, 9, 8, 7, 8];
//1, đảo ngược các phần tử của mảng

let reverstring = [];
for (let i = array3.length - 1; i > 0; i--) {
  reverstring.push(array3[i]);
}

console.log("reverstring", reverstring);

// 2,tìm kiếm vị trí xuất hiện của một phần tử trong mảng,dữ liệu lấy từ trình duyệt
let element = parseInt(prompt("nhap phan tu"));
let index =null;
for (let i = 0; i < array3.length; i++) {
  if (array3[i] === element) {
    index=i;
  }else{
    index=-1;
  }
}
if(index !== -1){

}else{c}
// 3,cho một mảng hãy sắp xếp mảng đó theo thứ tự tăng dần
for(let i = 0;i<)

// 4,Cho một mảng hãy tìm giá trị nhỏ nhất và lớn nhất trog mảng
