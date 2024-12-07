let text_1 = "Hello";
text_1 = "hello1";
let number1;
console.log(number1);
const isPresent = true;
function add(a, b) {
    return a + Number(b);
}
console.log(add(number1, true));
let numberArray = [10, 20, 30, 10];
let mixArray = [10, "deepak"];
// Admin
// Student
// Teacher
var Role;
(function (Role) {
    Role[Role["Admin"] = 0] = "Admin";
    Role[Role["Student"] = 1] = "Student";
    Role[Role["Teacher"] = 2] = "Teacher";
})(Role || (Role = {}));
let userRole = Role.Admin;
