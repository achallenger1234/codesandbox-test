//var 再代入再宣言 ok

// var var1 = "var変数";
// console.log(var1);
// var1 = "var変数を上書き";
// console.log(var1);
// var var1 = "var変数を再宣言";
// console.log(var1);

//let 再代入ok　再宣言ng
// let val2 = "let変数";
// console.log(val2);
// val2 = "let変数を上書き";
// console.log(val2);
// let val2 = "let変数を再宣言";
// console.log(val2);

//const 再代入再宣言 ng
// const val3 = "const変数";
// console.log(val3);
// val3 = "const変数を上書き";
// console.log(val3);
// const val3 = "const変数を再宣言";
// console.log(val3);

//constで定義したオブジェクトはプロパティの変更が可能
// const val4 = {
//   name: "じゃけぇ",
//   age: 28,
// }
// val4.name = "zyake"//ok
// val4.address = "hirosima"
// console.log(val4);

//constで定義した配列はプロパティの変更が可能
// const val5 = ['dog', 'cat']
// val5[0]  = "bird";
// val5.push("monkey");
// console.log(val5);

/**
 * テンプレート文字列
 */
// const name = "じゃけぇ";
// const age = 28;

// // 「わたしの名前はじゃけぇです。年齢は28才です。」
// const message1 = `私の名前は${name}です。年齢は${age}です。`
// console.log(message1);

/**
 *  アロー関数
 */

//従来の書き方
// function func1(str){
//   return str;
// }

// const func1 = function(str){
//   return str;
// }
// console.log(func1("func1です"));

//アロー関数

// const func2 = (str) => {
//   return str;
// };

// console.log(func2("func2です"));

// const func3 = (num1, num2) => {
//   return num1 + num2;
// };

// console.log(func3(10, 20));

// /**
//  * 分割代入
//  */

// const myProfile = {
//   name: "じゃけぇ",
//   age: 28
// };
// const message1 = `なまえは${myProfile.name}です。年齢は${myProfile.age}です`;
// console.log(message1);

// const { name, age } = myProfile;

// const message2 = `なまえは${name}です。年齢は${age}です`;
// console.log(message2);

// const myProfile = ['じゃけぇ', 28];
// const message3 = `なまえは${myProfile[0]}です。年齢は${myProfile[1]}です`;
// console.log(message3);

// const[name, age]= myProfile;
// const message4 = `なまえは${name}です。年齢は${age}です`;
// console.log(message4);

/**
 * デフォルト値、引数など
 */
// const sayHello = (name = "ゲスト") => console.log(`こんにちは！${name}さん！`)
// sayHello();

/**
 * スプレット構文 ...
 */

//配列の展開
//  const arr1 = [1,2];
// //  console.log(arr1);
// //  console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

//まとめる
// const arr2 = [1,2,3,4,5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

//配列のコピー、結合
// const arr4 = [10,20];
// const arr5 = [30,40];

// const arr6 = [...arr4];
// console.log(arr6);

// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

/**
 * mapやfillterを使った配列の処理
 */

const nameArr = ["田中", "山田", "じゃけぇ"];
//  for (let index=0; index < nameArr.length; index++){
//     console.log(`${index +1}番目は${nameArr[index]}です`);
//  }

//  const nameArr2 = nameArr.map((name)=>{
//    return name;
//  })
//  console.log(nameArr2);

// nameArr.map((name, index)=>console.log(`${index + 1}番目は${name}です。`));

// const numArr = [1,2,3,4,5];
// const newNumArr = numArr.filter((num)=>{
//   return num % 2 === 1;
// });
// console.log(newNumArr);

// const newNameArr = nameArr.map((name) =>{
//   if(name ==="じゃけぇ"){
//     return name;
//   } else {
//     return `${name}さん`
//   }
// })
// console.log(newNameArr);

/**
 * 三項演算子
 */
//ある条件 ? tureの時: falseの時
// const val1 = 1 < 0 ? 'tureです' : 'falseです';
// console.log(val1);

// const num = 1300;
// // console.log(num.toLocaleString());

// const formattedNum = typeof num === 'number' ? num.toLocaleString() : '数値を入力してください';
// console.log(formattedNum);

// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? "100を超えています" : "許容範囲です。";
// };

// console.log(checkSum(100, 20));

/**
 * 論理演算子の本当の意味を知ろう && ||
 */

//  const flag1 = true;
//  const flag2 = false;

// if(flag1 || flag2){
//   console.log("1か2はtrueになります");
// }

// if(flag1 && flag2){
//   console.log("1も2もtureになります");
// }

// || は左側がfalseなら右側を返す
const num = null;

const fee = num || "金額未設定です";
console.log(fee);

// &&左側がtureなら右側を返す
const num2 = null;
const fee2 = num2 && "何か設定されました";
console.log(fee2);
