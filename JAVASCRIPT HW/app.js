//1) დაწერეთ ფუნქცია processNumbers, რომელიც პარამეტრად იღებს ორ რიცხვს და callBack ფუნქციას.
// და ამ ფუნქციის გამოძახებით უნდა შესრულდეს არითმეტიკული
//ოპერაციები ციფრებზეც მაგალითად მიმატება ან გამოკლება რომელიც უნდა გვეწეროს callBack ფუნქციაში.


/*function processNumbers(callBack) {
    return callBack(10,10)
}

function callBackFunction(num1, num2) {
    console.log(num1 + num2);
}

processNumbers(callBackFunction);
*/


//2)შექმენით ფუნქცია isValidUser, რომელიც იღებს მომხმარებლის სახელს და პაროლს პარამეტრად
//და აბრუნებს true, თუ ორივე ცარიელი სტრიქონებია; წინააღმდეგ შემთხვევაში,
//დააბრუნეთ ყალბი. გამოიყენეთ ლოგიკური ოპერატორები.დაგჭირდებათ გაიგოთ მონაცემთა ტიპი
//და ისე შეამოწმოთ თუ სტრინგი აქვს ტიპად!!

// function isValidUser(username, password) {
//     if (username.length && password.length < 0) {
//         return false
//     } else {
//         return true
//     }
// }

// console.log(isValidUser("Saba", "mucuk"));

//3)შექმენით რეკურსიული ფუნქცია, რომელიც დააბრუნებს n რიცხვს ფიბონაჩის მიმდევრობაში.

// function fibonacci(num) {
//     let num1 = 0;
//     let num2 = 1;
//     let sum;
//     let i = 0;
//     for (i = 0; i < num; i++) {
//         sum = num1 + num2;
//         num1 = num2;
//         num2 = sum;
//     }
//     return num2;
// }

// console.log("Fibonacci(5): " + fibonacci(5));
// console.log("Fibonacci(8): " + fibonacci(8));

//4)შექმენით უკუმთვლელი ტაიმერი, რომელიც ითვლის 10-დან 0 წამამდე, შემდეგ დაბეჭდავს "დრო ამოიწურა!".
//გამოიყენეთ setInterval მეთოდი და დროის დასრულების შემდეგ უნდა დავამთავროთ ტაიმერი!!

// let count = 10;

// const myFunction = setInterval(function () {
//     console.log(count);

//     if (count === 0) {
//         alert("Time is up!");
//         clearInterval(myFunction);
//     } else {
//         count--;
//     }
// }, 1000);

// console.log(myFunction);

//5)შექმენით ფუნქცია, რომელიც ითვლის და აბრუნებს ასაკს მოცემული დაბადების თარიღის მიხედვით თარიღის ობიექტების გამოყენებით.


// const ageCalculator =  function (birth1, birth2) {
//     const date = new Date();
//     let year = date.getFullYear();

//     const ageSum = year - birth1;
//      const ageSum2 = year - birth2;
     
//      return [ageSum, ageSum2];
// }

// const ages = ageCalculator(1986, 1990);
// console.log(ages);



//6) დაწერეთ ფუნქცია, რომელიც ბეჭდავს კვირის მიმდინარე დღის
// სახელს თარიღის გამოყენებით.დაგჭირდებათ array-ში შეინახოთ
//კვირის დღეები და ისე შეამოწმოთ new Date() დახმარებით!!

// const date = new Date();
// const days = date.getDay();
// const week = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
// const today = week[days];
// console.log(today);
