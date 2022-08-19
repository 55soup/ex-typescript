// let 이름: string = "kim";
// let 이름: string[] = ["kim", "park"];
// let 이름: { name?: string } = {};
// type Name = string | number;
// let 이름: Name = 123;

// function 함수(x: number): number {
//   return x * 2;
// }
// 함수(123);

// // type Member = [number, boolean];
// // let john: Member = [123, true];

// type Member = {
//   [key: string]: string;
// };
// let john: Member = { name: "kim" };

class User {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}
