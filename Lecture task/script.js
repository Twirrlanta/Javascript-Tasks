// 1) დაწერეთ კოდი სადაც შეამოწმებთ დადებითია თუ უარყოფითი 
// ეს რიცხვი!!

//asnwer: 

// let number = 1;

// if(number > 0) {
//     console.log("ეს რიცხვი დადებითია")
// } else {
//     console.log("ეს რიცხვი უარყოფითია")
// }



//2)დაწერეთ მარტივი კალკულატორი სადაც გამოიყენებთ ოპერატორებს(+, -, *, /)
// switch case დახმარებით უბრალოდ დარწმუნდით რომ თითოეულ ქეისი ასრულებს ამ მეთოდებს 

//asnwer: 

// let num1 = 10;
// let num2 = 20;

// number = "Plus";

// switch (number) {
//     case "Plus":
//         console.log(num1 + num2);
//         break;
//     case "Minus":
//         console.log(num1 - num2);
//         break;
//     case "Multiply":
//         console.log(num1 * num2);
//         break;
//     case "Divide":
//         console.log(num1 / num2);
//         break;
//     default:
//         break;
// }


//3) დაწერეთ იგივე კალკულატორი if else დახმარებით!!

//asnwer: 

// let num1 = 10;
// let num2 = 20;

// sum = "+"

// if(sum === "+") {
//     console.log(num1 + num2);
// } else if (sum === "-") {
//     console.log(num1 - num2);
// } else if(sum === "*") {
//     console.log(num1 * num2);
// } else if(sum === "/") {
//     console.log(num1 / num2);
// } else {
//     console.log("num NOT found!");
// }



//4) დაწერეთ ავტორიზაციის ლოგიკა სადაც უნდა დავარეგისტრიროთ User
// user უნდა შემოყავდეს firstName,lastName,email,password,phoneNumber
// firstName,lastName,email,password არის სავალდებულო ველები
// ამიტომ ერთიანად შეამოწმეთ ეს ოთხი ველი და დარწმუნდით თუ ცარიელი input 
// არარის მაშინ დალოგეთ რომ შენ დარეგისტრირდი წარმატებით თუ ცარიელია მაშინ
// დალოგეთ "input is required" გამოიყენეთ if else

//asnwer:

let firstName = "saba"
let lastName = "Gigauri"
let email = "Saba@gmail.com"
let password = "123321312"
let phoneNumber = "932847329842"

if(firstName !== "" && lastName !== "" && email !== "" && password !== "" && phoneNumber !== "") {
    console.log("succesful registration")
} else if (phoneNumber === "") {
    console.log("phonenumber is required")
} else { 
    console.log("registration failed")
} 