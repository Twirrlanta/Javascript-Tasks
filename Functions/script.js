//1) დავწეროთ ფუნქცია რომელსაც გადეცემა რაიმე პარამეტრი და არგუმენტად
//მიიღებს ისეთ რიცხვებს რომლის დახმარებითაც უნდა გამოვითვალო
//მაგალითად რამდენი წელი გვაკლდება თითოეულს პენსიამდე და ეს
//ყველაფერი უნდა დავწეროთ ამ ფუნქციაში.

/*let numbers = "30";
let age = "70";

function myFunction(params) {
    if (numbers < 30) {
        let pension = age - numbers;
        console.log(`პენსიამდე მოცდა გიწევთ ${pension} წელი!`);
    } else if(numbers >= 30) {
        console.log("თქვენ უკვე პენსიაზე ხართ გასული!");
    } else {
        console.log("ცხოვრებით გაერთე :)");
    }
}

myFunction();
*/

//2)შექმენით კალკულატორის ფუნქცია სახელად კალკულატორი,
// რომელიც ასრულებს ძირითად არითმეტიკულ ოპერაციებს.
// ამ ფუნქციამ უნდა მიიღოს სამი პარამეტრი: ორი რიცხვი და სტრიქონი,მაგალითად num1,num2, "+".
// რომელიც წარმოადგენს არითმეტიკულ ოპერატორს ('+', '-', '*', '/').
// მოწოდებული ოპერატორის მიხედვით, ფუნქციამ უნდა შეასრულოს შესაბამისი ოპერაცია ორ ნომერზე და დააბრუნოს შედეგი.



// function Calculator(num1, num2, sum) {
//     if(sum === "+") {
//         console.log(num1 + num2);
//     } else if (sum === "-") { 
//         console.log(num1 - num2);
//     } else if (sum === "*") {
//         console.log(num1 * num2);
//     } else if (sum === "/") {
//         console.log(num1 / num2);
//     } else {
//         console.log("Numbers not found!")
//     }
// }

// Calculator(10, 20, "+");

//3)შეიმუშავეთ ფუნქცია სახელწოდებით checkPasswordStrength, რომელიც აფასებს მოცემული პაროლის სიძლიერეს.
// პაროლის სიძლიერე განისაზღვრება რამდენიმე კრიტერიუმის საფუძველზე: ის უნდა იყოს მინიმუმ 8 სიმბოლო და მაქსიმუმ 16 სიმბოლო;
// ფუნქციამ უნდა დააბრუნოს სტრიქონი სადაც გვეწერება რომ თუ ნაკლებია 8 მაშინ შესაბამისი ერორით თუ მეტია 16 მაშინ შესაბამისი ერრორით და თუ ცარიელია input უნდა შევამოწმოთ ეგეც
//გამოიყენეთ if-else განცხადებები თითოეული კრიტერიუმის შესამოწმებლად და სიძლიერის შესაფასებლად.

// let password = "abcd123";

// function checkPasswordStrength(password) {
//     if(password.length < 8) {
//         alert("Password is too weak!")
//     } else if (password.length >= 16) {
//         alert("Maximum character capacity reached!")
//     } else if (password.length === 0) {
//         alert("Password input cannot be empty!")
//     } else {
//         alert("Enter your password.")
//     }
// }

// checkPasswordStrength(password);

//4) დაწერეთ ფუქნცია სადაც პარამეტრად გავატანთ flowers და არგუმენტად გავატანთ ყვავილების სახეობებს.
//და გვჭირდება რომ switch case დავწეროთ ლოგიკა რომ თუ შესაბამისი სახელის ყვავილები გვაქვს მაშინ დავაბრუნოთ console-ში 
//ეს ყვავილი ნაპოვნია!!

// let flower = ["ვარდი", "იასამანი", "ტიტები", "ყაყაჩო"];

// function flowerFilter(flowers) {
//     for(let i = 0; i < flowers.length; i++)
//     switch(flowers[i]) {
//         case "ვარდი":
//             console.log("ვარდი ნაპოვნია!");
//             break;
//         case "იასამანი":
//             console.log("იასამანი ნაპოვნია!");
//             break;
//         case "ტიტები":
//             console.log("ტიტები ნაპოვნია!");
//             break;
//         case "ყაყაჩო":
//             console.log("ყაყაჩო ნაპოვნია!")
//             break;
//         default:
//             console.log("ყვავილები დასაკრეფია :)")
//     }
// }

// flowerFilter(flower);

//5)გვჭირდება სამი prompt.გვჭირდება რომ ამ სამ ინფუტში შემოყვანილი რიცხვებიდან რომელი არის უდიდესი ის დავიჭიროთ და დავლოგოთ უბრალოდ.
// მაგალითად.2,5,7 და აქედან უდიდესი არის 7.
//დაწერეთ ფუნქციაში ეს ყველაფერი და შემდეგ ამ ფუნქციაში შეამოწმეთ if else დახმარებით!!

// let num1 = prompt("Enter the first number:")
// let num2 = prompt("Enter the second number:")
// let num3 = prompt("Enter the third number:")

// function biggerNumber() {
//     if(num1 > num2 && num1 > num3) {
//         alert(`The largest number is ${num1}`);
//     } else if (num2 > num1 && num2 > num3) {
//         alert(`The bigger number is ${num2}`);
//     } else {
//         alert(`The largest number is ${num3}`);
//     }
// }

// biggerNumber();