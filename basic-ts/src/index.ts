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

// type
type Person = {
  name: string;
  mobile: string;
  roll_no: number;
};

let student: Person = {
  name: "Deepak",
  mobile: "9898989898",
  roll_no: 20,
};

interface Person1 {
  name: string;
  mobile: string;
  roll_no: number;
}

let student1: Person1 = {
  name: "Deepak",
  mobile: "9898989898",
  roll_no: 20,
};
type Age = {
  age: number;
};
class Human {
  name: string;
  age: number;
  constructor() {}

  getHumanAge(): Age {
    return {
      age: this.age,
    };
  }
}

const human = new Human();
human.getHumanAge();

function getData<G>(data: G): G {
  return data;
}

getData<string>("deepak");

getData<number>(10);

function getMoreData<G>(value: G): G[] {
  return [value];
}

getMoreData<string>("deepak");
