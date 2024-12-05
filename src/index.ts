let text_1 = "Hello";
text_1 = "hello1";

let number1: number;
console.log(number1);
const isPresent: boolean = true;

function add(a: number, b: boolean) {
  return a + Number(b);
}

console.log(add(number1, true));

let numberArray: number[] = [10, 20, 30, 10];
let mixArray: [number, string] = [10, "deepak"];

// Admin
// Student
// Teacher
enum Role {
  Admin,
  Student,
  Teacher,
}

let userRole: Role = Role.Admin;

// Union type
type userId = number | string;

let userRoleAssign: userId = 1; // 1 == Admin
userRoleAssign = "Admin";
