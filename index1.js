// khai báo mảng
// const arrayNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(arrayNumber);
// cách tạo mảng
// cách 1 sử dụng đối tượng Array
const array1 = new Array(1, "A", null, undefined);

for (let i = 0; i < array1.length; i++) {
  console.log("Index", i); //vị trí
  console.log(array1[i]); //giá trị của các phần tử
}
// cách 2 :khai báo theo kiểu liternal
const array2 = [1, 2, 3, 4, 5];

for (let i = 0; i < array2.length; i++) {
  console.log(array2[i]);
}

// từ khóa typyof dùng để kiểm tra dữ liệu của biến

// Kiểm tra mảng
console.log(Array.isArray(array1));

// các thao tác làm việc vs mảng
// 1 thêm phần tử ở cuối mảng

array2.push(6, 7, 8);
console.log(array2);

// 2 xóa phần tử ở cuối mảng

array2.pop();
console.log("mảng sau khi pop", array2);
// 3 thêm phần tử ở đầu mảng

array2.unshift(0);
console.log("mảng sau khi unshift", array2);

// 4,Xóa phần tử ở đầu mảng
array2.shift();
console.log("mảng sau khi shift", array2);

// kiểm tra độ dài của mảng
const arraylength = array2.length;
console.log("độdài của mảng", arraylength);

// chuyển đổi 1 mảng thành 1 chuỗi

const arrayConvertString = array2.toString();
console.log("mảng sau khi chuyển đổi ", arrayConvertString);

// đảo ngược các phần tử của mảng

array2.reverse();
console.log(array2);

// nối nhiều mảng lại với nhau

// const array3 = array1.concat(array2);

const array3 = [...array1, ...array2]; //toán tử spread
console.log("Mảng mới ", array3);

//cắt phần tử trong mảng
const newArray = array3.slice(1, 2); //nếu chuyền slice9=(0)sẽ copy cả mảng
console.log("mảng mới sau cắt", newArray);

// cho một mảng danh sách giá cả
const price = [100, 300, 500, 600, 900]; //tính tổng các phần tử trong mảng

let total = 0;
for (let i = 0; i < price.length; i++) {
  total += price[i];
}

console.log("total=", total);

// tạo ra 1 mảng rỗng tên là products viết 1 menu
// nếu chọn 1 thì cho phép thêm sản phẩm
// nếu chọn 2 thì cho phép xóa sản phẩm ở cuối
// nếu chọn 3 thì in ra mảng products
// nếu chọn 4 thì thoát chương trình
// nếu chọn khác (5,6,7) thì yêu cầu nhập lại

const products = [];

let number;
while (number > 0 && number !== 4) {
  number = parseInt(prompt("nhập lựa chọn"));
  switch (number) {
    case 1:
      let item = prompt("thêm lựa chọn");
      products.push(item);
      break;
    case 2:
      products.pop();
      break;
    case 3:
      alert(products);
      break;
    case 4:
      alert("thoát chương trình");
      break;
    default:
      number = parseInt(prompt("nhập lại lựa chọn"));
      break;
  }
}

// chuyển đổi một mảng về một chuỗi

const array4 = ["lâm", "thái", "hải"];

const newArray1 = array4.toString();
console.log("newarray2", newArray1);

// Hàm join()
const newArray2 = array4.join(" ");
console.log("newarray2", newArray2);

// chuyển đổi một chuỗi thành một mảng

const myString = " a b c d e f g h i j k";
const stringConvertToArray = myString.split(" ");
console.log("Sau khi join", stringConvertToArray);
