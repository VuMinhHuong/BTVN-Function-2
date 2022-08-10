//Bài 1: Viết chương trình cộng hai số (Sử dụng Return)
// function add2Number (a,b){
//     let a1 = parseInt(a);
//     let b1 = parseInt(b);
//     let total;
//     if (isNaN(a1) && isNaN(b1)){
//         total = 'Your input NaN';
//     } else {
//         total = a1 + b1;
//     }
// return total;
// }
// let n1 = prompt('Input n1 number');
// let n2 = prompt('Input n2 number');
// console.log(add2Number(n1,n2));

//parseInt(12a) = 12 ?

//Bài 2: Tính tổng các số lẻ trong mảng
// let arr = [1, 2, 3, 4, 5, 6];
// function totalOddNumberInArray(array) {
//     let total = 0;
//     for (let i = 0; i <= array.length; i++) {
//         if (array[i] % 2 !== 0) {
//             total += i;
//         }
//     }
//     return total;
// }
// let temp = totalOddNumberInArray(arr);
// console.log(temp);


//Bài 3:
// Tạo hàm nhận vào hai tham số. Nếu giá trị của tham số thứ nhất lớn hơn
// tham số thứ hai, hiển thị hộp thoại thông báo cho người dùng. Nếu giá trị của
// tham số thứ nhất nhỏ hơn hoặc bằng tham số thứ hai, trả về tổng của hai tham
// số.

// function twoRefer (n1,n2) {
//     let inf;
//     if (n1 > n2) {
//         inf = `${n1} more than ${n2}`;
//     } else {
//         inf = n1 + n2;
//     }
//     return inf;
// }

// let a = prompt('Inpur first number');
// let b = prompt('Inpur second number');
// console.log(twoRefer(a,b));

//Bài 4:
// function addNumbers() {
//     firstNum = 4;
//     secondNum = 8;
//     result = firstNum + secondNum;
//     return result;
// }
// result = 0;
// alert(result);
// result = addNumbers();
// alert(result);

//Bài 5:
// Chuyển đổi giữa feet và meters
// function footToMeter(foot) {
//     let meter;
//     meter = 0.305 * foot;
//     return meter;
// }
// function meterToFoot(meter) {
//     let foot;
//     foot = 3.279 * meter
//     return foot;
// }
// let a = prompt('input your foot');
// console.log(footToMeter(a));
// let b = prompt('input your meter');
// console.log(meterToFoot(b));

//Bài 6:
// Tạo hàm để kiểm tra số nguyên tố
//1. Để kiểm tra xem một số nguyên bất kỳ có phải là số nguyên tố hay
// không.
// function isPrime(number) {
//     let check = 0;
//     for (let i = 2; i < number; i++) {
//         if (number % 2 === 0) {
//             check += 1;
//         }
//     }
//     if (check > 0) {
//         console.log(`${number} is not prime number`);
//     } else {
//         console.log(`${number} is prime number`);
//     }
// }

// let a = prompt ('Input check number');
// isPrime(a);

// 2. Sau khi làm được mục 1, Sử dụng phương thức này để tìm tất cả các số
// nguyên tố nhỏ hơn 100 và in nó ra
// function isPrime(num) {
//     for ( var i = 2; i < num; i++ ) {
//         if ( num % i === 0 ) {
//             return false;
//         }
//     }
//     return true;
// }

// function display(n) {
//     var arr = [2];
//     for ( var i = 3; i < n; i+=2 ) {
//         if ( isPrime(i) ) {
//             arr.push(i);
//         }
//     }
//     console.log(arr);
// }
// display(100);
