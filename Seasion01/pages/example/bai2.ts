// function handle_bai_2():void{
//     const str:string=prompt('Nhap chuoi');
//     const checkData = isValid(str);
//     if(checkData){
//         console.log("Ky tu hop le")
//     }
//     else  {
//         console.log("Ky tu khong hop le ")
//     }

// }
// function isValid(data:string): boolean {
//     const dataCheck = {
//         "{":"}",
//         "[":"]",
//         "(":")"
//     };
//     const stack = [];
//     for(let index= 0; index<data.length;index++){
//         const char= data[index];
//         if(){
//             //kiem tra xem co key bang gia tri cua data thu i hay khong -->
//             stack.push(char);

//         } else{
//             //neu khong co char->du lieu khong la nhung truonwg hop dau mo--> nos la dau
//             if(char !== stack.pop()){
//                 //kiem tra xem dau dong do co phai la dau dong cuoi cung hay khong
//                 return false;
//             }
//         }
//     }
//     return true;
// }
//bai2
//b1:chuyen chu hoa thanh chu thuong
//b2:loai bo khoang trang
//b3:kiem tra chuoi doi xung

//b1:
//  s = "A man, a plan, a canal: Panama"
//  true
// asdfdsa
// asdf
//b1:
const inputSring: string = "race a car";
function palindrome(s: string): boolean {
  //chuyen chu hoa thanh chu thuong
  const a = s.toLowerCase().replace(/[^0-9_-]/g, ""); //xoa bo ky tu dac biet, khoang trang
  //kiem tra doi xung
  // a.reverseString(“”)
  const arrofChar = a.split("").reverse().join("");
    console.log(arrofChar);
    
  return arrofChar === a;
}

console.log(palindrome(inputSring));
//lam chi tiet 
const inputString: string =" A man, a plan, a canal: Panama";
function palindromes (s:string):boolean{
  //chuyen chu hoa thanh chu thuong  toLowerCase
  const a = s.toLocaleLowerCase().replace(/[^0-9_-]/g, '');
  
  //xoa bo cac ky tu dac biet, khoang trang          str.replace(/[^0-9_-]/g, '');
  //kiem tra doi xung
  //b1: chuyen mot chuoi sang mot mang cac ky tu
  const arroChar = a.split("");

  //b2: su dung phuong thuc reverse() de dao nguoc cac ky tu
  const strToarr = arroChar.reverse();
 
  
  //b3:su dung phuong thuc join() de gop lai de gop cac phan tu cua mang thanh mot chuoi
   const newStirng = strToarr.join(""); 
  
   //b4: tra ve mot chuoi da duoc dao nguoc
   return newStirng===a;


}
// BTVN
// function isAnagram(s: string, t: string): boolean {
  // Kiểm tra độ dài của chuỗi s và t có bằng nhau không
//   if (s.length !== t.length) {
//     return false;
//   }

//   const charCounts = {};

//   // Đếm số lần xuất hiện của các ký tự trong chuỗi s
//   for (const char of s) {
//     // Kiểm tra xem ký tự này đã tồn tại trong đối tượng charCount chưa
//     if (charCounts[char]) {
//       // Nếu đã tồn tại, tăng số lần xuất hiện lên 1
//       charCounts[char]++;
//     } else {
//       // Nếu chưa tồn tại, khởi tạo số lần xuất hiện bằng 1
//       charCounts[char] = 1;
//     }
//   }

//   // Kiểm tra từng ký tự trong chuỗi t
//   for (const char of t) {
//     // Kiểm tra xem ký tự này đã tồn tại trong đối tượng charCount chưa
//     if (charCounts[char] === undefined || charCounts[char] === 0) {
//       // Nếu ký tự này không tồn tại hoặc đã hết lượt xuất hiện, trả về false
//       return false;
//     }
//     // Giảm số lần xuất hiện đi 1
//     charCounts[char]--;
//   }

//   // Kiểm tra xem tất cả số lần xuất hiện của các ký tự đã về 0 hay chưa
//   for (const key in charCount) {
//     if (charCounts[key] !== 0) {
//       // Nếu còn ký tự có số lần xuất hiện khác 0, trả về false
//       return false;
//     }
//   }

//   // Nếu không có điều kiện nào trả về false, trả về true, tức là chuỗi t là từ hoán vị của chuỗi s
//   return true;
// }
//
function maxSubarraySum(nums: number[]): number {
  if (nums.length === 0) {
    return 0;
  }

  let maxSum = nums[0]; 
  let currentSum = nums[0];

  for (let i = 1; i < nums.length; i++) {

    currentSum = Math.max(currentSum + nums[i], nums[i]);

    // Sau đó, so sánh currentSum với maxSum và cập nhật maxSum nếu currentSum lớn hơn
    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
}
